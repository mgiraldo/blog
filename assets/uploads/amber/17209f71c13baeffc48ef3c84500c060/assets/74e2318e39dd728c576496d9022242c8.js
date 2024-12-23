
// ------------------------------------------------
// Cookie Warning Display
// ------------------------------------------------

/*
 
Checks whether cookies have already been acknowledged on the site, and if not displays a suitable warning
 
*/

var cookieWarning;               // The warning element itself
var cookieWarningDelay = 15;     // The number of seconds to display the warning
var cwIsIE = (navigator.appName == 'Microsoft Internet Explorer');
var cwAppName = 'encarda';

var cwRoot = getcwRoot();

// Erases cookie for testing - this should be commented on release
// document.cookie = 'encardaCookieAllow=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';

// Attach to the page load and resize events

if (window.addEventListener) {
    window.addEventListener('load',initCookieWarning,false);
    window.addEventListener('resize',adjustCookieWarning,false);
} else {
    window.attachEvent('onload',initCookieWarning);
    window.attachEvent('onresize',adjustCookieWarning,false);
}

function getcwRoot() {
   var uri = location.href;
   uri = uri.replace('http://localhost:8888/encarda/','');
   uri = uri.replace('http://www.glyphweb.com/arda/','');
   uri = uri.replace('http://www.encyclopedia-of-arda.com/','');
   var slashes = (uri.match(/\//g) || []).length;
   var root = '';
   if (slashes > 0) {
     for (var i = 0; i < slashes; i++) {
        root = '../'+root;
     }
   }
   return root;
}

function cwGetCookie(name){
    
    // Check whether a cookie exists and return its content
    
    var i,x,y,cookies = document.cookie.split(";");
    
    for (i = 0; i < cookies.length; i++) {
        x = cookies[i].substr(0,cookies[i].indexOf("="));
        y = cookies[i].substr(cookies[i].indexOf("=")+1);
        x = x.replace(/^\s+|\s+$/g,"");
        if ( x == name) {
            return unescape(y);
        }
    }
    
    return false;
    
}

function cwSetCookie(name,value,expiry) {
    
    // Sets a named cookie

    var maxAge = (expiry*24*60*60);
    value = escape(value) + ((expiry == null) ? "" : "; Max-Age="+maxAge+';path=/');
    document.cookie = name + "=" + value;
    
}

function animateCookieWarningUp() {
    cookieWarning.style.bottom = '20px';
}
function animateCookieWarningDown() {
    var elementHeight = cookieWarning.clientHeight + 1;
    cookieWarning.style.bottom = '-'+elementHeight+'px';
    setTimeout('finaliseCookieWarning()',1000);
}
function finaliseCookieWarning() {
    cookieWarning.style.display = 'none';
    cwSetCookie(cwAppName+'CookieAllow','1',365);
}

function adjustCookieWarning() {

    var pageWidth = 0;
    if (self.innerHeight) {
        pageWidth = self.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            pageWidth = document.documentElement.clientWidth;
        } else if (document.body) {
            pageWidth = document.body.clientWidth;
        }
    }
    if ((typeof cookieWarning !== 'undefined') && (typeof cookieWarning.clientWidth !== 'undefined')) {
        var elementWidth = cookieWarning.clientWidth;
        cookieWarning.style.left = ((pageWidth-elementWidth)/2) + 'px';
    }
    
}

function initCookieWarning() {

    // Set up the warning and bind it into the page

    // Create the element

    cookieWarning = document.createElement('div');
    
    var messageWidth = 725;
    var messageHeight = 22;
    
    // Set up its basic styles

    var pageWidth = 0;
    if (self.innerHeight) {
        pageWidth = self.innerWidth;
    } else {
        if (document.documentElement && document.documentElement.clientHeight) {
            pageWidth = document.documentElement.clientWidth;
        } else if (document.body) {
            pageWidth = document.body.clientWidth;
        }
    }

    cookieWarning.style.position = 'fixed';
    cookieWarning.style.bottom = '20px';

    cookieWarning.style.webkitTransition = 'bottom 0.5s ease-in-out';
    cookieWarning.style.transition = 'bottom 0.5s ease-in-out';

    cookieWarning.style.padding = '5px';
    cookieWarning.style.textAlign = 'center';

    cookieWarning.style.backgroundColor = '#ffd88f';
    
    cookieWarning.className = 'cookieWarning';
    
    if (messageWidth < pageWidth) {
        cookieWarning.style.left = ((pageWidth-messageWidth)/2) + 'px';
        cookieWarning.style.width = messageWidth+'px';
        cookieWarning.style.height = 'auto';
        //tdStyle = 'white-space:nowrap;'
        tdStyle = 'text-align:left;'
    } else {
        messageWidth = pageWidth;
        cookieWarning.style.left = '0';
        cookieWarning.style.width = '90%';
        cookieWarning.style.marginLeft = '5%';
        cookieWarning.style.height = 'auto';
        tdStyle = 'text-align:left;vertical-align:top';
    }

    if (navigator.appName != 'Microsoft Internet Explorer') {
        cookieWarning.style.backgroundImage = '-webkit-gradient(linear, left top, left bottom, color-stop(0.1, #ffdaa2),color-stop(0.9, #ffd57b))';
        cookieWarning.style.backgroundImage = '-moz-linear-gradient(top,#ffdaa2,#ffd57b)';
        cookieWarning.style.backgroundImage = 'linear-gradient(top,#ffdaa2,#ffd57b)';
    }
    if (! cwIsIE) {
        cookieWarning.style.boxShadow = '4px 4px 2px rgba(0,0,0,0.2)';
    }

    cookieWarning.style.borderRadius = '10px';
    cookieWarning.style.border = '1px solid #57362f';
    cookieWarning.style.bottom = '20px';
    cookieWarning.style.textAlign = 'left';
    cookieWarning.style.padding = '20px';
    cookieWarning.style.boxSizing = 'border-box';
    
    cookieWarning.style.zIndex = '15';
    
    var content = '';
    content += '<h1 style="letter-spacing:0;margin:0px;margin-bottom:2px;font-weight:normal;font-size:16px;color:#800000">Cookies on this site</h1>';
    content += '<p style="margin-top:5px;font-size:14px;line-height:20px">By continuing to browse the site you are agreeing to our use of cookies. Find out more in our <a href="'+cwRoot+'privacy-policy.html" target="_blank">Privacy Policy</a>.</p>';
    content += '<div style="text-align:center;vertical-align:top"><button type="button" class="closeCookieWarning" onclick="animateCookieWarningDown()">OK</button></div>';
    
    cookieWarning.innerHTML = content;
    
    // Insert the background pane into the page
    // and display if necessary

    if (! cwGetCookie(cwAppName+'CookieAllow')) {
        var body = document.getElementsByTagName('body')[0];
        body.appendChild(cookieWarning);
        //setTimeout(animateCookieWarningDown,50+(cookieWarningDelay*1000));
    }

}
