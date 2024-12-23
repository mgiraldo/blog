// ######********######
 var today=new Date();
 var y0=today.getFullYear();

Bookmark="http://www.erightsoft.com/" 
var Anim=".SWF"

var sPath    = window.location.pathname; 
var baseName = sPath.substring(sPath.lastIndexOf('/')+1);
     
//var baseName = window.location.pathname.substring(window.location.pathname.lastIndexOf("/")+1) || "index.html";
//var baseName = document.url;  ////https://www.sitepoint.com/community/t/javascript-equivalent-to-basename-php-self/1252/3
 
// var Digital=new Date();
// var sec=Digital.getSeconds()/5;
// var rslt1=Math.round(sec);

// if (rslt1<2)              {DwnlsiteH=DwnlsiteHeader}  else 
// if (rslt1>=2 && rslt1<4)  {DwnlsiteH=DwnlsiteHeader1} else 
// if (rslt1>=4 && rslt1<6)  {DwnlsiteH=DwnlsiteHeader2} else 
// if (rslt1>=6 && rslt1<8)  {DwnlsiteH=DwnlsiteHeader3} else 
// if (rslt1>=8 && rslt1<10) {DwnlsiteH=DwnlsiteHeader4} else 
// if (rslt1>=10)            {DwnlsiteH=DwnlsiteHeader5}

 DwnlsiteH="/"

// browser definition
var userAgent = navigator.userAgent.toLowerCase();
var is_opera  = (userAgent.indexOf('opera') != -1);
var is__MSIE  = (userAgent.indexOf('msie') != -1); 
var is_saf    = ((userAgent.indexOf('applewebkit') != -1) || (navigator.vendor == 'Apple Computer, Inc.'));
var is_webtv  = (userAgent.indexOf('webtv') != -1);
var is_ie     = ((userAgent.indexOf('msie') != -1) && (!is_opera) && (!is_saf) && (!is_webtv));
var is_ie4    = ((is_ie) && (userAgent.indexOf("msie 4.") != -1));
var is_moz    = ((navigator.product == 'Gecko') && (!is_saf));
var is_kon    = (userAgent.indexOf('konqueror') != -1);
var is_ns     = ((userAgent.indexOf('compatible') == -1) && (userAgent.indexOf('mozilla') != -1) && (!is_opera) && (!is_webtv) && (!is_saf));
var is_ns4    = ((is_ns) && (parseInt(navigator.appVersion) == 4));
var not_MSIE  = ((is_opera) | (is_moz) | (is_kon) | (is_saf) | (is_webtv) | (is_ns) | (is_ns4));
var is_MSIE   = ((is_ie) | (is_ie4)); 
// ################


function isSafari(){
  return checkBrowser('Safari');
}

function isMSIE() {
  return checkBrowser('MSIE') && !isOpera();
}

function isOpera() {
  return checkBrowser('Opera');
}

function isNetscape() {
  return checkBrowser('Netscape');
}

function isMozilla() {
  return checkBrowser('Mozilla') && !isOpera() && !isMSIE() && !isNetscape();
}

function checkBrowser(name) {
  return navigator.userAgent.indexOf(name) > -1;
}
		
// ################
function translate()
{
     document.writeln("<div id='google_translate_element'></div><script type='text/javascript'> ");
     document.writeln("function googleTranslateElementInit() ");
     document.writeln(" { new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.HORIZONTAL}, 'google_translate_element'); } ");
     document.writeln("</script><script type='text/javascript' src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit'></script> ");

//    document.writeln("<div id='MicrosoftTranslatorWidget' class='Dark' style='color:white;background-color:#555555'></div><script type='text/javascript'>setTimeout(function(){{var s=document.createElement('script');s.type='text/javascript';s.charset='UTF-8';s.src=((location && location.href && location.href.indexOf('https') == 0)?'https://ssl.microsofttranslator.com':'http://www.microsofttranslator.com')+'/ajax/v3/WidgetV3.ashx?siteData=ueOIGRSKkd965FeEGM5JtQ**&ctf=False&ui=true&settings=Manual&from=';var p=document.getElementsByTagName('head')[0]||document.documentElement;p.insertBefore(s,p.firstChild); }},0);</script> "); 
} 
// ################
function bookmark()
{
    document.writeln("      <td align='right'>");
    document.writeln("      <table border='0' cellpadding='0' cellspacing='0' width='100%'>");
    document.writeln("         <td style='PADDING-RIGHT: 20px; ' vAlign='bottom' align='right'>");

//    if (is_MSIE)
//     {
//       document.writeln('<A HREF="#" onClick="window.external.AddFavorite(url_site, title_site);return(false);">Bookmark</A>');
//     }
//    if (is_opera)
//     {
//       document.writeln("[CTRL+T or CTRL+D] to Bookmark")
//     }
//    if (is_moz)
//     {
//       document.writeln("[CTRL+D] to Bookmark")
//     }


    document.writeln("<form action='http://www.google.com' id='cse-search-box' target='_blank'>");  
    document.writeln("<div>");   
    document.writeln("<input type='hidden' name='cx' value='partner-pub-4328139768599087:4860937657' /> ");
    document.writeln("<input type='hidden' name='ie' value='ISO-8859-1' />");    
    document.writeln("<input type='text' name='q' size='49' />");   
    document.writeln("<input type='submit' name='sa' value='Search' />");  
    document.writeln("</div>");
    document.writeln("</form>");
    document.writeln("<script type='text/javascript' src='http://www.google.com/coop/cse/brand?form=cse-search-box&amp;lang=en'></script>");

    translate()
 
    document.writeln("         </td>");
    document.writeln("      </table>");
    document.writeln("      </td>"); 
}
// ################

function nobookmark()
{
    document.writeln("      <td align='right'>");
    document.writeln("      <table border='0' cellpadding='0' cellspacing='0' width='100%'>");
    document.writeln("         <td style='PADDING-RIGHT: 20px; ' vAlign='bottom' align='right'>");
    document.writeln("         </td>");
    document.writeln("      </table>");
    document.writeln("      </td>"); 
}
// ################

function SetPhotos(site_a, site_b, site_c)
{
    document.writeln("        <div align='center'>");
    document.writeln("<img src=");document.writeln(DwnlsiteH+site_a);document.writeln("border='1' width='23%' height='120'>");

    if (site_b.search(Anim)==-1) {  
    document.writeln("<img src=");document.writeln(DwnlsiteH+site_b);document.writeln("border='1' width='52%' height='120'>");
    } else { 
    document.writeln("<embed src=");document.writeln(DwnlsiteH+'head/'+site_b);document.writeln("width='52%' height='122' quality='High' loop='true'");
    document.writeln("play='true' menu='false' scale='ExactFit' type='application/x-shockwave-flash' pluginspace='http://www.macromedia.com/go/getflashplayer'>");
    document.writeln("</embed>");
    } 

    document.writeln("<img src=");document.writeln(DwnlsiteH+site_c);document.writeln("border='1' width='23%' height='120'>");
    document.writeln("        </div> ");
}
// ################

function Header(page,logo,t_s, a,b,c)
{
    url_site=Bookmark+page
    title_site=t_s

    document.open();
    document.writeln("<table border='0' width='100%' cellspacing='0' cellpadding='0' height='50' bgcolor='#FFFFFF' background='line.gif'>");
    document.writeln("  <tr>");
    document.writeln("    <td width='160' height='50' valign='center' align='center' nowrap bgcolor='#FFFFFF'>");
    document.writeln("     <p style='text-indent: 0; margin: 0'>");
    document.writeln("     <a href=");
    document.writeln(page);
    document.writeln("><img border='0' src="); 
    document.writeln(logo); 
    document.writeln("></a></p>");
    document.writeln("    </td>");

//    if (t_s != '') { 
      bookmark()
//     } else
//      nobookmark()

    document.writeln("  </tr>");
    document.writeln("</table>");

    SetPhotos(a,b,c)
}
// ################

function Headersuper()
{
    Header('SUPER.html','ERsuper.gif','', 'site_logoa4.gif','site_logob14.jpg','site_logoc4.jpg')
} 
// ################

function DisplayNavBar()
{
    document.open();
    document.writeln("<table border='0' width='100%' cellspacing='0' cellpadding='0'>");
    document.writeln("<tr>");
    document.writeln("<td background='bkleftright.gif'>");
    document.writeln("<div align='center'>");
    document.writeln("<center>");
    document.writeln("<script type='text/javascript' language='JavaScript1.2'>");
    document.writeln("<!--");
    document.writeln("stm_bm(['mainmenu',430,'','sp.gif',0,'','',1,0,0,0,50,1,0,0,'','',0],this);");
    document.writeln("stm_bp('p0',[0,4,0,0,3,0,15,0,100,'progid:DXImageTransform.Microsoft.Fade(overlap=.5,enabled=0,Duration=0.20)',-2,'',-2,90,0,0,'#7f7f7f','#000000','bkmiddle.gif',3,0,0,'#000000']);");
    document.writeln("stm_ai('p0i0',[6,16,'transparent','separator.gif',2,15,0]);");
/////////////////////////////////////////////////////////////////////
    document.writeln("stm_ai('p0i1',[0,'Home','','',-1,-1,0,'home.html','_self','','','','',0,0,0,'','',-1,-1,0,0,1,'#f0f0f0',1,'#f0f0f0',1,'','',0,3,0,0,'#ffffff','#ffffff','#333333','#cc0000','bold 8pt Verdana','bold 8pt Verdana',0,0]);");
    document.writeln("stm_bp('p1',[1,4,-10,4,0,3,7,0,100,'',-2,'',-2,90,0,0,'#cccccc','transparent','',3,1,1,'#808080']);");
    document.writeln("stm_aix('p1i0','p0i1',[0,'eRightSoft >> HomePage','','',-1,-1,0,'home.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p1i1','p0i0',[6,1,'#cccccc','',-1,-1]);");
    
    
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i2','p0i0',[]);");
/////////////////////////////////////////////////////////////////////
    document.writeln("stm_aix('p0i3','p0i1',[0,'SUPER &copy;','','',-1,-1,0,'SUPER.html','_self','','','super.ico','super.ico',13,13]);");
    document.writeln("stm_bpx('p2','p1',[1,4,-10,4,0,3,7,7]);");

    document.writeln("stm_aix('p2i0','p1i1',[0,'SUPER &copy; Details','','',-1,-1,0,'SUPER.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i1','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i25','p1i1',[0,'SUPER &copy; Options','','',-1,-1,0,'dsd.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i26','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i27','p1i1',[0,'SUPER &copy; Download','','',-1,-1,0,'SUPER.html#Dnload','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i28','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i29','p1i1',[0,'SUPER &copy; FAQ','','',-1,-1,0,'faqt.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i30','p1i0',[6,1,'#cccccc','',-1,-1]);");


    document.writeln("stm_aix('p2i31','p1i0',[0,'3D Video Converter Encoder','','',-1,-1,0,'video-converter.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p2','p1',[1,4,236,-20]);");
    document.writeln("stm_aix('p2i32','p1i1',[0,'3D Video Converter features','','',-1,-1,0,'video-converter.html','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i33','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i34','p1i1',[0,'3D Video Encoder features','','',-1,-1,0,'video-encoder.html','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i35','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i36','p1i1',[0,'Audio Converter features','','',-1,-1,0,'audio-converter.html','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i37','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i38','p1i1',[0,'Audio Encoder features','','',-1,-1,0,'audio-encoder.html','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i39','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p2i40','p1i0',[6,1,'#cccccc','',-1,-1]);");


    document.writeln("stm_aix('p2i2','p1i0',[0,'Portable Devices Support','','',-1,-1,0,'portabledev.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p2','p1',[1,4,236,-20]);");
    document.writeln("stm_aix('p2i3','p1i1',[0,'Apple - iPad/iPod/iPhone','','',-1,-1,0,'iApple.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i4','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i5','p1i1',[0,'BlackBerry Smartphone','','',-1,-1,0,'BBerry.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i6','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i7','p1i1',[0,'Microsoft - Xbox','','',-1,-1,0,'msXbox.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i8','p1i0',[6,1,'#cccccc','',-1,-1]);");


    document.writeln("stm_aix('p2i9','p1i1',[0,'Microsoft - Zune','','',-1,-1,0,'msZune.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_bpx('p2','p1',[1,4,160,-20]);");

    document.writeln("stm_aix('p2i10','p1i1',[0,'Microsoft - Zune (MP4)','','',-1,-1,0,'msZune.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i11','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i12','p1i1',[0,'Microsoft - Zune (WMV)','','',-1,-1,0,'msZuneW.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i13','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p2i14','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i15','p1i1',[0,'Mp.man  Player','','',-1,-1,0,'Mpman.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i16','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i17','p1i1',[0,'Nintendo - DS','','',-1,-1,0,'NintendoDS.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i18','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i19','p1i1',[0,'Sony - PS3','','',-1,-1,0,'sPS3.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_bpx('p2','p1',[1,4,160,-20]);");

    document.writeln("stm_aix('p2i20','p1i1',[0,'Sony - PS3 (MP4)','','',-1,-1,0,'sPS3.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i21','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i22','p1i1',[0,'Sony - PS3 (M2TS)','','',-1,-1,0,'sPS3ts.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i23','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p2i24','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_aix('p2i25','p1i1',[0,'Sony - PSP','','',-1,-1,0,'sPSP.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i26','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i27','p1i1',[0,'AMV  Players','','',-1,-1,0,'S1AMV.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i28','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i29','p1i1',[0,'SMV  Players','','',-1,-1,0,'SigSMV.htm','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i30','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_ep();");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i4','p0i0',[]);");

/////////////////////////////////////////////////////////////////////
    document.writeln("stm_aix('p0i9','p0i1',[0,'Other Software','','',-1,-1,0,'96crypt.html']);");
    document.writeln("stm_bpx('p3','p1',[1,4,-10,4,0,3,7,7]);");

    document.writeln("stm_aix('p2i0','p0i1',[0,'96CRYPT  ','','',-1,-1,0,'96crypt.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p2','p1',[1,4,221,-20]);");
    document.writeln("stm_aix('p2i0','p1i1',[0,'EnCryption/DeCryption <b>Shareware</b>','','',-1,-1,0,'96crypt.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i2','p1i1',[0,'Minimum Requirements','','',-1,-1,0,'96crypt.html#Top2','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i3','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i4','p1i1',[0,'Download','','',-1,-1,0,'96crypt.html#Top3','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i5','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i6','p1i1',[0,'Uninstall','','',-1,-1,0,'96crypt.html#Down','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i7','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p2i8','p1i1',[0,'User Guide','','',-1,-1,0,'./help/UserGuide.htm','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p2i9','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i1','p1i1',[]);");

    document.writeln("stm_aix('p3i2','p1i0',[0,'eVideoPlayerCrypter','','',-1,-1,0,'eVideoPlayerCrypter.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p3','p1',[1,4,221,-20]);");
    document.writeln("stm_aix('p3i0','p1i1',[0,'Video Player Crypter','','',-1,-1,0,'eVideoPlayerCrypter.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p3i2','p1i1',[0,'Download','','',-1,-1,0,'eVideoPlayerCrypter.html#Down','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i3','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i1','p1i1',[]);");

    document.writeln("stm_aix('p3i2','p1i0',[0,'SYMPA','','',-1,-1,0,'sympa.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p3','p1',[1,4,221,-20]);");
    document.writeln("stm_aix('p3i0','p1i1',[0,'Anonymous eMail Sender','','',-1,-1,0,'sympa.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p3i2','p1i1',[0,'Download','','',-1,-1,0,'sympa.html#Down','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i3','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i1','p1i1',[]);");

    document.writeln("stm_aix('p3i2','p1i0',[0,'Is-It-On','','',-1,-1,0,'isiton.html','_self','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p3','p1',[1,4,221,-20]);");
    document.writeln("stm_aix('p3i0','p1i1',[0,'Network Detector','','',-1,-1,0,'isiton.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p3i2','p1i1',[0,'Download','','',-1,-1,0,'isiton.html#Down','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i3','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i1','p1i1',[]);");

    document.writeln("stm_aix('p3i2','p1i0',[0,'YourTurboDownloadManager','','',-1,-1,0,'http://www.DownloadManager4U.com/YTDMhtml.php','_blank','','','arrowred.gif','arrowred.gif',0,0,0,'arrow2red.gif','arrow2red.gif',7,7,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','bold 11px Verdana','bold 11px Verdana']);");
    document.writeln("stm_bpx('p3','p1',[1,4,221,-20]);");
    document.writeln("stm_aix('p3i0','p1i1',[0,'A product of <b>[Liam Brennan & Hu Chwan]</b>','','',-1,-1,0,'http://www.DownloadManager4U.com/YTDMhtml.php','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p3i2','p1i1',[0,'Download','','',-1,-1,0,'http://www.DownloadManager4U.com/YTDMhtml.php','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p3i3','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i1','p1i1',[]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p3i4','p0i0',[]);");
/////////////////////////////////////////////////////////////////////
    document.writeln("stm_aix('p45','p0i1',[0,'Free Services','','',-1,-1,0,'myIP.html']);");
    document.writeln("stm_bpx('p4','p1',[]);");
    document.writeln("stm_aix('p4i0','p1i1',[0,'Internet speed test','','',-1,-1,0,'IStest.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p4i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p4i2','p1i1',[0,'Find your connection IP','','',-1,-1,0,'myIP.html','_blank','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p4i3','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p4i4','p0i0',[]);");
/////////////////////////////////////////////////////////////////////
    document.writeln("stm_aix('p0i5','p0i1',[0,'Buy OnLine','','',-1,-1,0,'96reg.html','_self','','','buyonline.gif','buyonline.gif',15,12]);");
    document.writeln("stm_bpx('p5','p1',[]);");
    document.writeln("stm_aix('p5i0','p1i1',[0,'buy 96Crypt OnLine','','',-1,-1,0,'96reg.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p5i1','p1i0',[6,1,'#cccccc','',-1,-1]);");

    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i8','p0i0',[]);");
/////////////////////////////////////////////////////////////////////
    document.writeln("stm_aix('p0i9','p0i1',[0,'Company','','',-1,-1,0,'about.html']);");
    document.writeln("stm_bpx('p6','p1',[]);");
    document.writeln("stm_aix('p6i0','p1i1',[0,'About Us','','',-1,-1,0,'about.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p6i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p6i2','p1i1',[0,'Privacy statement','','',-1,-1,0,'privacy.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p6i3','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p6i4','p1i1',[0,'Legal Notices','','',-1,-1,0,'terms.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p6i5','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p6i6','p1i1',[0,'Contact & Support','','',-1,-1,0,'contact.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p6i7','p1i0',[6,1,'#cccccc','',-1,-1]);");
    
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i10','p0i0',[]);");
///////////////////////////////////////////////////////////////////// 
    document.writeln("stm_aix('p0i11','p0i9',[0,'Messages..','','',-1,-1,0,'Supforum.html']);");
    document.writeln("stm_bpx('p7','p1',[]);");
    document.writeln("stm_aix('p7i0','p1i1',[0,'96Crypt Discussions','','',-1,-1,0,'96forum.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p7i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p7i2','p1i1',[0,'SUPER &copy; leave a message','','',-1,-1,0,'Supforum.html','_self','','','arrowred.gif','arrowred.gif',7,7,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p7i3','p1i0',[6,1,'#cccccc','',-1,-1]);");
 
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i12','p0i0',[]);");

/////////////////////////////////////////////////////////////////////

    document.writeln("stm_aix('p0i13','p0i9',[0,'Community','','',-1,-1,0,'Supforum.html']);");
    document.writeln("stm_bpx('p8','p1',[]);");
    document.writeln("stm_aix('p8i0','p1i1',[0,'facebook','','',-1,-1,0,'SocialNetworks.php?21113','_blank','','','./snaps/images/facebook.png','./snaps/images/facebook.png',13,13,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p8i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p8i2','p1i1',[0,'twitter','','',-1,-1,0,'SocialNetworks.php?21213','_blank','','','./snaps/images/twitter.png','./snaps/images/twitter.png',13,13,0,'','',0,0,0,0,1,'#ffffff',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p8i3','p1i0',[6,1,'#cccccc','',-1,-1]);");
    document.writeln("stm_aix('p8i0','p1i1',[0,'Google+','','',-1,-1,0,'SocialNetworks.php?21313','_blank','','','./snaps/images/Google+.png','./snaps/images/Google+.png',13,13,0,'','',0,0,0,0,1,'#f0f0f0',0,'#969696',0,'','',3,3,0,0,'#ffffff','#ffffff','#505050','#ffffff','11px Verdana','11px Verdana']);");
    document.writeln("stm_aix('p8i1','p1i0',[6,1,'#cccccc','',-1,-1]);");
 
    document.writeln("stm_ep();");
    document.writeln("stm_aix('p0i14','p0i0',[]);");
/////////////////////////////////////////////////////////////////////

    document.writeln("stm_ep();");
    document.writeln("stm_em();");
    document.writeln("//-->");
    document.writeln("</script>");
    document.writeln("</center>");
    document.writeln("</div>");
    document.writeln("</td>");
    document.writeln("</tr>");
    document.writeln("</table>");
}

// ################
function DisplayNavShade()
{
    document.open();
    document.writeln("<table border='0' width='100%' cellspacing='0' cellpadding='0'>");
    document.writeln("  <tr>");
    document.writeln("    <td WIDTH='100%' background='s1.gif'>");
    document.writeln("    <img SRC='' width='8' HEIGHT='8' ALT BORDER='0'></td>");
    document.writeln("  </tr>");
    document.writeln("</table>");
}

// ################
function Displaystatct()
{
    document.open();
    document.writeln("<script type='text/javascript' language='javascript'>");
    document.writeln("var sc_project=366935");
    document.writeln("var sc_partition=1");
    document.writeln("</script>");
    document.writeln("<script type='text/javascript' language='javascript' src='http://www.statcounter.com/counter/counter.js'></script><noscript><a href='http://www.statcounter.com/free_hit_counter.html' target='_blank'><img  src='http://c2.statcounter.com/counter.php?sc_project=366935&amp;java=0' alt='hit counter' border='0'></a> </noscript>");
}

// ################
function DisplayStatus()
{
    document.open();
    document.writeln("<table width=100% border=0>");
    document.writeln(" <tr bgcolor='#DADADA'>");
    document.writeln("   <td align=center width=50 bgcolor=#DADADA><font face='Verdana, Arial, Helvetica, sans-serif' color=#FFFFFF><b><font size='-1'>");


    document.writeln("<script type='text/javascript' language='javascript'>");
    document.writeln("var sc_project=366935");
    document.writeln("var sc_partition=1");
    document.writeln("</script>");
    document.writeln("<script type='text/javascript' language='javascript' src='http://www.statcounter.com/counter/counter.js'></script><noscript><a href='http://www.statcounter.com/free_hit_counter.html' target='_blank'><img  src='http://c2.statcounter.com/counter.php?sc_project=366935&amp;java=0' alt='hit counter' border='0'></a> </noscript>");
    
//    document.writeln("<script type="text/javascript'> 
//    document.writeln("var sc_project=7335495");
//    document.writeln("var sc_invisible=1");
//    document.writeln("var sc_security='dba8c628'"); 
//    document.writeln("</script><script type='text/javascript' src='http://www.statcounter.com/counter/counter.js></script> <noscript><div class='statcounter'><a title='' href='http://statcounter.com/tumblr/' target='_blank'><img class='statcounter' src='http://c.statcounter.com/7335495/0/dba8c628/1/' alt=''></a></div></noscript>

    document.writeln("   </td>");

    document.writeln("   <td bgcolor=#DADADA align=center> <font face='Verdana, Arial, Helvetica, sans-serif' color=#4D4D4D>");
    document.writeln("<font size='-3'>Copyright &copy; 2002 -");
    document.writeln(y0);
    document.writeln(" eRightSoft - All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");    
    document.writeln("     </font> <a href='privacy.html' alt='Media File Converter, Media File Encoder, Video Player' target='_blank'> <font size='-3'>Privacy Statement</a> | ");
    document.writeln("     <a href='terms.html' alt='Media File Converter, Media File Encoder, Video Player' target='_blank'> <font size='-3'>Legal Notices</a></b></font>");

    document.writeln("   </td>");



    document.writeln("   <td>");

    document.writeln("<div style='VISIBILITY: hidden;'>"); 

    document.writeln("<script id='_wauni7'>var _wau = _wau || []; _wau.push(['small', 'ddd50a2iskp2', 'ni7']);");
    document.writeln("(function() {var s=document.createElement('script'); s.async=true;");
    document.writeln("s.src='http://widgets.amung.us/small.js';");
    document.writeln("document.getElementsByTagName('head')[0].appendChild(s);");
    document.writeln("})();</script>");

    document.writeln("<div hidden>");


//    document.writeln("<div hidden>");
//    document.writeln("<iframe src='http://meet-arabs.com/account/home/'></iframe>");   
//    document.writeln("</div>");

    document.writeln("   </td>");
    document.writeln("</tr>");
    document.writeln("</table>");
}

// ################
function DisplayStatusShade()
{
    document.open();
    document.writeln("<table border='0' width='100%' cellspacing='0' cellpadding='0'>");
    document.writeln("  <tr>");
    document.writeln("    <td WIDTH='100%' background='s2.gif'>");
    document.writeln("    <img SRC='' width='8' HEIGHT='8' ALT BORDER='0'></td>");
    document.writeln("  </tr>");
    document.writeln("</table>");
}

// ################
function DisplayOK()
{
    document.open();
    document.writeln("<font size='1'>");
    document.writeln(" <div align='center'> ");

    document.writeln(" <img src='./snaps/images/shade.png' width=100%  height=21 border='0'> </br></br> ");


    document.writeln(" <table width='100%'>  ");
    document.writeln(" <tr bgcolor='#F2F2F2'>");


    document.writeln(" <td width='115' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Monitored by</font> </br> ");
    document.writeln("<a target='_blank' href='/safetyverifier.php?13211'><img width='104' height='40' border='0' src='./snaps/images/MXtoolBoxOK.png' ></a> ");
    document.writeln("</div> </td> ");

       document.writeln(" <td width='2' valign='top'> ");
       document.writeln("&nbsp;&nbsp;");
    
    document.writeln(" <td width='100' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Advisory by</font> </br> ");
    document.writeln("<a target='_blank' href='/safetyverifier.php?13212'><img width='104' height='40' border='0' src='./snaps/images/GglOK.gif' ></a> ");
    document.writeln("</div> </td> ");

       document.writeln(" <td width='2' valign='top'> &nbsp;&nbsp;");
    
    document.writeln(" <td width='100' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Tested by</font> </br> ");
    document.writeln(" <a target='_blank' href='/safetyverifier.php?13213'><img width='104' height='42' border='0' src='./snaps/images/vtOK.png' ></a> ");
    document.writeln("</div> </td> ");

       document.writeln(" <td width='2' valign='top'> &nbsp;&nbsp;");

    //document.writeln(" <td width='100' valign='top'> <div align='center'>");
    //document.writeln("<font size='1'>Approved SAFE by</font> </br> ");
    //document.writeln(" <a target='_blank' href='/safetyverifier.php?13212'><img width='87' height='33'  border='0' src='./snaps/images/nortonOK.png' ></a> ");
    //document.writeln("</div> </td> ");


    document.writeln(" <td width='100' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Validated by</font> </br> ");
    document.writeln(" <a target='_blank' href='/safetyverifier.php?13214'><img width='110' height='34'  border='0' src='./snaps/images/mcafeeOK.png' ></a> ");
    document.writeln("</div> </td> ");

       document.writeln(" <td width='2' valign='top'> &nbsp;&nbsp;");

    document.writeln(" <td width='100' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Scanned by COMODO</font> </br> ");
    document.writeln(" <a target='_blank' href='/safetyverifier.php?13215'><img width='100' height='34'  border='0' src='./snaps/images/comodoOK.png' ></a> ");
    document.writeln("</div> </td> ");

       document.writeln(" <td width='2' valign='top'> &nbsp;&nbsp;");

    document.writeln(" <td width='115' valign='top'> <div align='center'>");
    document.writeln("<font size='1'>Approved SAFE by</font> </br> ");
    document.writeln(" <a target='_blank' href='/safetyverifier.php?13216'><img width='100' height='36' border='0' src='./snaps/images/AVGOK.png' ></a> ");
    document.writeln("</div> </td> ");


    document.writeln("</tr>");
    document.writeln("</table></br>");

    document.writeln("All information and details given in this web site, are NOT contractual and may be modified without prior notice.</br>");
    document.writeln("All trademarks, icons, and logos shown or mentioned in this web site are the property of their respective owners.<br>");
    if (baseName == 'Superdc.html') 
    {
    document.writeln("PayPal and Click2Sell are our ONLY exclusive authorized <b>Global Payment Gateways</b> for our online downloadable products.<br>");
    document.writeln("eRightSoft &copy; <a href='/TOS.Refund.GPG.php' alt='Sales TOS | Refund Policy' target='_blank'> <font size='-3'>Sales TOS | Refund Policy</a><br>"); 
    }





    document.writeln(" <table width='33%'>  ");
    document.writeln(" <tr bgcolor='#F2F2F2'>");

    document.writeln(" <td width='60' valign='center'> ");
    document.writeln(" <div align='center'> ");
    document.writeln("<font size='1'>Join Us</font> </br> ");
    document.writeln("<a target='_blank' href='/SocialNetworks.php?21113'><img width='40' height='40' border='0' src='./snaps/images/facebook.png' ></a> ");
    document.writeln("</div>");
    document.writeln(" </td>  ");

    document.writeln(" <td width='60' valign='center'> ");
    document.writeln(" <div align='center'> ");
    document.writeln("<font size='1'>Follow Us</font> </br> ");
    document.writeln("<a target='_blank' href='/SocialNetworks.php?21213'><img width='40' height='40' border='0' src='./snaps/images/twitter.png' ></a> ");
    document.writeln("</div>");
    document.writeln(" </td>  ");

    document.writeln(" <td width='60' valign='center'> ");
    document.writeln(" <div align='center'> ");
    document.writeln("<font size='1'>Share</font> </br> ");
    document.writeln("<a target='_blank' href='/SocialNetworks.php?21313'><img width='40' height='40' border='0' src='./snaps/images/Google+.png' ></a> ");
    document.writeln("</div>");
    document.writeln(" </td>  ");

    document.writeln("</br>");

    document.writeln("</tr>");
    document.writeln("</table>");


    document.writeln("</div>");
    document.writeln("</font> ");
}

// ################
function openPopup(url,x,y)
{
  if (!x){x=760;};
  if (!y){y=630;};
  window.open(url,null,'toolbar=yes,menubar=no,resizable=yes,scrollbars=yes,width='+x+',height='+y);
}

// ################
function openPopupFixed(url,x,y)
{
  if (!x){x=760;};
  if (!y){y=630;};
  window.open(url,null,'toolbar=no,status=no,menubar=no,resizable=yes,scrollbars=no,width='+x+',height='+y);
}

// ################