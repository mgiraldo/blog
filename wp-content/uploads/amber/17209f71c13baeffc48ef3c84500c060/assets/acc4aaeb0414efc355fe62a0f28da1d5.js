// Theme file for Encarda iOS

themeName = 'encardaIOS';

var montage;
var downloadButton;
var downloadButtonIPad;
var animateAngle = 1;
var animatorMontage = null;

var userAgent = navigator.userAgent;
var isWebKit = (userAgent.indexOf('AppleWebKit') != -1);
var isGecko = (userAgent.indexOf('Gecko') != -1);

function createElement(elementType,parentId) {
    var element = document.createElement(elementType);
    var parent = document.getElementsByTagName('body')[0];
    if (arguments.length == 2) {
        parent = document.getElementById(parentId);
    }
    parent.appendChild(element);
    return element;
}


function moreInfo() {
    window.open('http://www.glyphweb.com/arda/encarda-app.html');
}

function preloadThemeImage(filename) {
    var load = new Image(5,5);
    load.src = filename;
}

function animateMontage() {
    if (isWebKit) {
        if ((document.hasFocus) && (document.hasFocus())) {
            montage.style.webkitTransform = 'rotate('+animateAngle/4+'rad)';
            animateAngle++;
        }
        if (animatorMontage == null) { animatorMontage = setInterval('animateMontage()',10000); }
    }
}

function downloadButtonOver(button) {
    downloadButton.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_hover.png)';
    downloadButton.style.color = 'black';
}
function downloadButtonOut() {
    downloadButton.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButton.style.color = 'black';
}
function downloadButtonDown() {
    downloadButton.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_active.png)';
    downloadButton.style.color = 'black';
}

function downloadButtonIPadOver() {
    downloadButtonIPad.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_hover.png)';
    downloadButtonIPad.style.color = 'black';
}
function downloadButtonIPadOut() {
    downloadButtonIPad.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButtonIPad.style.color = 'black';
}
function downloadButtonIPadDown() {
    downloadButtonIPad.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_active.png)';
    downloadButtonIPad.style.color = 'black';
}

function downloadButtonAndroidOver() {
    downloadButtonAndroid.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_hover.png)';
    downloadButtonAndroid.style.color = 'black';
}
function downloadButtonAndroidOut() {
    downloadButtonAndroid.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButtonAndroid.style.color = 'black';
}
function downloadButtonAndroidDown() {
    downloadButtonAndroid.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download_active.png)';
    downloadButtonAndroid.style.color = 'black';
}

function initTheme() {
    
    // Called on load - must be present in any theme file
    
    preloadThemeImage(''+root+'themes/planet-wheel/button-hover.png');
    preloadThemeImage(''+root+'themes/planet-wheel/button-active.png');

    document.body.style.backgroundColor = '#202020';
    document.getElementById('themePageStructure').style.backgroundColor = '#202020'; 
    document.getElementById('themeBaseStructure').style.border = '1px solid #926a62'; 

    if (isWebKit) {
        document.body.style.backgroundColor = 'transparent';
        document.getElementById('themePageStructure').style.backgroundColor = 'transparent'; 
        document.body.style.backgroundImage = '-webkit-gradient(linear,left top,left bottom,color-stop(0.05, #020202),color-stop(0.95, #565656))'; 
        document.getElementById('themeBaseStructure').style.webkitBoxShadow = '0px 0px 5px 5px rgba(0,0,0,0.6)';
        document.getElementById('themeBaseStructure').style.webkitBoxShadow = '0px 0px 5px 5px rgba(0,0,0,0.6)';
    }
    if (isGecko) {
        document.getElementById('themePageStructure').style.backgroundImage = '-moz-linear-gradient(top,#020202,#565656)';
    }
    document.getElementById('themeBaseStructure').style.marginTop = '90px';
  
    // Rotating graphic montage
    montage = createElement('img','themePageTop');
    montage.style.display = 'block';
    montage.style.position = 'absolute';
    montage.src = ''+root+'themes/encarda-ios/montage.png';
    montage.width = 361;
    montage.height = 361;
    montage.style.top = '-10px';
    montage.style.left = '-115px';
    montage.style.zIndex = '-1';
    montage.style.webkitTransition = 'all 10s linear';

    montage.onload = animateMontage;

    // 'Glow' image - not used in current design
    /*
    var glow = createElement('img','themePageTop');
    glow.style.display = 'block';
    glow.style.position = 'absolute';
    glow.src = ''+root+'themes/encarda-ios/glow.png';
    glow.width = 300;
    glow.height = 300;
    glow.style.left = '-80px';
    glow.style.top = '20px';
    glow.style.zIndex = '-1';
    */

    // Bullet points
    var bullets = createElement('div','themePageTop');
    bullets.style.display = 'block';
    bullets.style.position = 'absolute';
    bullets.style.color = 'white';
    bullets.style.left = '220px';
    bullets.style.top = '15px';
    bullets.style.font = '14px times new roman, times, serif';
    var bulletsContent = '';
    bulletsContent += '<style type="text/css">';
    bulletsContent += '#encardaIOSBullets li { margin-bottom:3px; }';
    bulletsContent += '#encardaIOSBullets { list-style-image:url('+root+'themes/encarda-ios/bullet.png);margin-top:0px }';
    bulletsContent += '</style>';
    bulletsContent += '<ul id="encardaIOSBullets">';
    bulletsContent += '<li>all the features of the website and more</li>';
    bulletsContent += '<li>no Internet connection needed</li>';
    bulletsContent += '<li>stay up to date with new content</li>';
    bulletsContent += '</ul>';
    bullets.innerHTML = bulletsContent;
    
    // Logotype caption
    var logotype = createElement('img','themePageTop');
    logotype.style.display = 'block';
    logotype.style.position = 'absolute';
    logotype.src = ''+root+'themes/encarda-ios/logotype.png';
    logotype.alt = 'The Encyclopedia of Arda';
    logotype.width = 261;
    logotype.height = 16;
    logotype.style.top = '17px';
    logotype.style.right = '185px';
    logotype.style.cursor = 'pointer';
    logotype.onclick = moreInfo;
    
    // Now available... caption
    var exploreCaption = createElement('div','themePageTop');
    exploreCaption.style.textAlign = 'right';
    exploreCaption.style.display = 'block';
    exploreCaption.style.position = 'absolute';
    exploreCaption.innerHTML = 'available for iOS';
    exploreCaption.style.color = 'white';
    exploreCaption.style.right = '185px';
    exploreCaption.style.top = '38px';
    exploreCaption.style.font = '16px times new roman, times, serif';
    exploreCaption.style.cursor = 'pointer';
    exploreCaption.style.letterSpacing = '0.1pc';
    exploreCaption.onclick = moreInfo;
   
    // Android blister
    /*
    var blister = createElement('img','themePageTop');
    blister.style.display = 'block';
    blister.style.position = 'absolute';
    blister.style.zIndex = '15';
    blister.src = ''+root+'themes/encarda-ios/android-blister.png';
    blister.alt = 'Android Version Out Now';
    blister.width = 75;
    blister.height = 75;
    blister.style.top = '80px';
    blister.style.right = '-60px';
    blister.style.cursor = 'pointer';
    blister.onclick = moreInfo;
    */

    /*

    // Download button - iPhone
    downloadButton = createElement('button','themePageTop');
    downloadButton.style.display = 'block';
    downloadButton.style.position = 'absolute';
    downloadButton.style.border = 'none';
    downloadButton.style.background = 'none';
    downloadButton.style.backgroundImage = 'url('+root+'themes/encarda-ios/button-base.png)';
    downloadButton.style.width = '136px';
    downloadButton.style.height = '18px';
    downloadButton.style.top = '63px';
    downloadButton.style.right = '330px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.color = 'black';
    downloadButton.style.paddingLeft = '10px';
    downloadButton.style.fontSize = '11px';
    downloadButton.style.fontWeight = 'bold';
    downloadButton.innerHTML = 'iPHONE VERSION';
    downloadButton.onmouseover = downloadButtonOver;
    downloadButton.onmouseout = downloadButtonOut;
    downloadButton.onmousedown = downloadButtonDown;
    downloadButton.onmouseup = downloadButtonOver;
    downloadButton.onclick = function() { window.open('http://itunes.apple.com/gb/app/encarda/id416105384?mt=8') };

    // Download button - iPad
    downloadButtonIPad = createElement('button','themePageTop');
    downloadButtonIPad.style.display = 'block';
    downloadButtonIPad.style.position = 'absolute';
    downloadButtonIPad.style.border = 'none';
    downloadButtonIPad.style.background = 'none';
    downloadButtonIPad.style.backgroundImage = 'url('+root+'themes/encarda-ios/button-base.png)';
    downloadButtonIPad.style.width = '136px';
    downloadButtonIPad.style.height = '18px';
    downloadButtonIPad.style.top = '63px';
    downloadButtonIPad.style.right = '185px';
    downloadButtonIPad.style.cursor = 'pointer';
    downloadButtonIPad.style.color = 'black';
    downloadButtonIPad.style.paddingLeft = '10px';
    downloadButtonIPad.style.fontSize = '11px';
    downloadButtonIPad.style.fontWeight = 'bold';
    downloadButtonIPad.innerHTML = 'iPAD VERSION';
    downloadButtonIPad.onmouseover = downloadButtonIPadOver;
    downloadButtonIPad.onmouseout = downloadButtonIPadOut;
    downloadButtonIPad.onmousedown = downloadButtonIPadDown;
    downloadButtonIPad.onmouseup = downloadButtonIPadOver;
    downloadButtonIPad.onclick = function() { window.open('http://itunes.apple.com/gb/app/encarda-hd/id420396627?mt=8') };

    */

    // Download button - iPhone
    downloadButton = createElement('button','themePageTop');
    downloadButton.style.display = 'block';
    downloadButton.style.position = 'absolute';
    downloadButton.style.border = 'none';
    downloadButton.style.background = 'none';
    downloadButton.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButton.style.width = '87px';
    downloadButton.style.height = '21px';
    downloadButton.style.top = '63px';
    downloadButton.style.right = '280px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.color = 'black';
    downloadButton.style.paddingLeft = '10px';
    downloadButton.style.fontSize = '11px';
    downloadButton.style.fontWeight = 'bold';
    downloadButton.innerHTML = 'iPHONE';
    downloadButton.onmouseover = downloadButtonOver;
    downloadButton.onmouseout = downloadButtonOut;
    downloadButton.onmousedown = downloadButtonDown;
    downloadButton.onmouseup = downloadButtonOver;
    downloadButton.onclick = function() { window.open('http://itunes.apple.com/gb/app/encarda/id416105384?mt=8') };

    // Download button - iPad
    downloadButtonIPad = createElement('button','themePageTop');
    downloadButtonIPad.style.display = 'block';
    downloadButtonIPad.style.position = 'absolute';
    downloadButtonIPad.style.border = 'none';
    downloadButtonIPad.style.background = 'none';
    downloadButtonIPad.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButtonIPad.style.width = '87px';
    downloadButtonIPad.style.height = '21px';
    downloadButtonIPad.style.top = '63px';
    downloadButtonIPad.style.right = '185px';
    downloadButtonIPad.style.cursor = 'pointer';
    downloadButtonIPad.style.color = 'black';
    downloadButtonIPad.style.paddingLeft = '10px';
    downloadButtonIPad.style.fontSize = '11px';
    downloadButtonIPad.style.fontWeight = 'bold';
    downloadButtonIPad.innerHTML = 'iPAD';
    downloadButtonIPad.onmouseover = downloadButtonIPadOver;
    downloadButtonIPad.onmouseout = downloadButtonIPadOut;
    downloadButtonIPad.onmousedown = downloadButtonIPadDown;
    downloadButtonIPad.onmouseup = downloadButtonIPadOver;
    downloadButtonIPad.onclick = function() { window.open('http://itunes.apple.com/gb/app/encarda-hd/id420396627?mt=8') };

    // Download button - Android
    /*
    downloadButtonAndroid = createElement('button','themePageTop');
    downloadButtonAndroid.style.display = 'block';
    downloadButtonAndroid.style.position = 'absolute';
    downloadButtonAndroid.style.border = 'none';
    downloadButtonAndroid.style.background = 'none';
    downloadButtonAndroid.style.backgroundImage = 'url('+root+'themes/encarda-ios/button_download.png)';
    downloadButtonAndroid.style.width = '87px';
    downloadButtonAndroid.style.height = '21px';
    downloadButtonAndroid.style.top = '63px';
    downloadButtonAndroid.style.right = '185px';
    downloadButtonAndroid.style.cursor = 'pointer';
    downloadButtonAndroid.style.color = 'black';
    downloadButtonAndroid.style.paddingLeft = '10px';
    downloadButtonAndroid.style.fontSize = '11px';
    downloadButtonAndroid.style.fontWeight = 'bold';
    downloadButtonAndroid.innerHTML = 'ANDROID';
    downloadButtonAndroid.onmouseover = downloadButtonAndroidOver;
    downloadButtonAndroid.onmouseout = downloadButtonAndroidOut;
    downloadButtonAndroid.onmousedown = downloadButtonAndroidDown;
    downloadButtonAndroid.onmouseup = downloadButtonAndroidOver;
    downloadButtonAndroid.onclick = function() { window.open('https://play.google.com/store/apps/details?id=com.virtix.encarda.alpha&feature=search_result#?t=W251bGwsMSwyLDEsImNvbS52aXJ0aXguZW5jYXJkYS5hbHBoYSJd') };
    */

    // Screenshots
    var screenshots = createElement('img','themePageTop');
    screenshots.style.display = 'block';
    screenshots.style.position = 'absolute';
    screenshots.src = ''+root+'themes/encarda-ios/screenshots.png';
    screenshots.width = 206;
    screenshots.height = 169;
    screenshots.style.top = '10px';
    screenshots.style.right = '-40px';
    screenshots.style.zIndex = '10';
    screenshots.style.cursor = 'pointer';
    screenshots.onclick = moreInfo;

    // Dragon image - not used in current design
    /*
    var dragon = createElement('img','themePageTop');
    dragon.style.display = 'block';
    dragon.style.position = 'absolute';
    dragon.src = ''+root+'themes/encarda-ios/dragon.png';
    dragon.width = 361;
    dragon.height = 394;
    dragon.style.top = '300px';
    dragon.style.right = '-150px';
    dragon.style.cursor = 'pointer';
    dragon.onclick = moreInfo;
    */
 }