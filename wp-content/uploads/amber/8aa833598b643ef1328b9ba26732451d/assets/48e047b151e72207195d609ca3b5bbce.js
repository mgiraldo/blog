// Theme file for Planet Wheel

themeName = 'planetWheel';

var downloadButton;
var wheelLargeRight;
var wheelLargeLeft;
var wheelSmallRight;
var animatorLargeRight = null;
var animatorLargeLeft = null;
var animatorSmallRight = null;
var animateAngle = 1;

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
    window.open('http://www.glyphweb.com/esky/links/planet-wheel-iphone-app.html');
}

function preloadThemeImage(filename) {
    var load = new Image(5,5);
    load.src = filename;
}

function animateLargeRight() {
    if (isWebKit) {
        if ((document.hasFocus) && (document.hasFocus())) {
			wheelLargeRight.style.webkitTransform = 'rotate(-'+animateAngle+'rad)';
			animateAngle++;
		}
		if (animatorLargeRight == null) { animatorLargeRight = setInterval('animateLargeRight()',5000); }
    }
}
function animateLargeLeft() {
    if (isWebKit) {
        if ((document.hasFocus) && (document.hasFocus())) {
			wheelLargeLeft.style.webkitTransform = 'rotate('+animateAngle/2+'rad)';
		}
		if (animatorLargeLeft == null) { animatorLargeLeft = setInterval('animateLargeLeft()',5000); }
    }
}
function animateSmallRight() {
    if (isWebKit) {
        if ((document.hasFocus) && (document.hasFocus())) {
			wheelSmallRight.style.webkitTransform = 'rotate('+animateAngle/2+'rad)';
		}
		if (animatorSmallRight == null) { animatorSmallRight = setInterval('animateSmallRight()',5000); }
    }
}

function downloadButtonOver() {
    downloadButton.style.backgroundImage = 'url('+root+'themes/planet-wheel/button-hover.png)';
}
function downloadButtonOut() {
    downloadButton.style.backgroundImage = 'url('+root+'themes/planet-wheel/button-base.png)';
}
function downloadButtonDown() {
    downloadButton.style.backgroundImage = 'url('+root+'themes/planet-wheel/button-active.png)';
}

function initTheme() {
    
    // Called on load - must be present in any theme file
    
    preloadThemeImage(''+root+'themes/planet-wheel/button-hover.png');
    preloadThemeImage(''+root+'themes/planet-wheel/button-active.png');


    document.body.style.background = 'none';
    document.body.style.backgroundColor = '#0e0d2b';
    document.getElementById('themePageStructure').style.backgroundColor = '#0e0d2b'; 

    if (isWebKit) { 
	document.body.style.backgroundImage = '-webkit-gradient(linear,left top,left bottom,color-stop(0.05, #000140),color-stop(0.95, #000000))'; 
	document.getElementById('themeBaseStructure').style.webkitBoxShadow = '0px 0px 5px 5px rgba(0,0,0,0.6)';
	document.getElementById('themeBaseStructure').style.webkitBoxShadow = '0px 0px 5px 5px rgba(0,0,0,0.6)';
    }
    if (isGecko) {
	document.getElementById('themePageStructure').style.backgroundImage = '-moz-linear-gradient(top,#000140,#000000)';
    }
    document.getElementById('themeBaseStructure').style.marginTop = '90px';
    
    // Starmap background
    var starmap = createElement('img','themePageTop');
    starmap.style.display = 'block';
    starmap.style.position = 'absolute';
    starmap.src = ''+root+'themes/planet-wheel/starmap.png';
    starmap.width = 1275;
    starmap.height = 100;
    starmap.style.top = '0px';
    starmap.style.right = '-137px';
    starmap.style.zIndex = '-2';

    // Explore the night sky... caption
    var exploreCaption = createElement('div','themePageTop');
    exploreCaption.style.display = 'block';
    exploreCaption.style.position = 'absolute';
    exploreCaption.innerHTML = 'Explore the Solar System on your iPhone';
    exploreCaption.style.color = '#D3DAE3';
    exploreCaption.style.top = '10px';
    exploreCaption.style.left = '157px';
    exploreCaption.style.font = '18px Tahoma,sans-serif';
    exploreCaption.style.cursor = 'pointer';
    exploreCaption.onclick = moreInfo;
    

    // Logotype caption
    var logotype = createElement('img','themePageTop');
    logotype.style.display = 'block';
    logotype.style.position = 'absolute';
    logotype.src = ''+root+'themes/planet-wheel/logotype.png';
    logotype.alt = 'Planet Wheel from the Electronic Sky';
    logotype.width = 236;
    logotype.height = 48;
    logotype.style.top = '10px';
    logotype.style.right = '150px';
    logotype.style.cursor = 'pointer';
    logotype.onclick = moreInfo;
    
    // Download button
    downloadButton = createElement('button','themePageTop');
    downloadButton.style.display = 'block';
    downloadButton.style.position = 'absolute';
    downloadButton.style.border = 'none';
    downloadButton.style.background = 'none';
    downloadButton.style.backgroundImage = 'url('+root+'themes/planet-wheel/button-base.png)';
    downloadButton.style.width = '137px';
    downloadButton.style.height = '20px';
    downloadButton.style.top = '60px';
    downloadButton.style.right = '147px';
    downloadButton.style.cursor = 'pointer';
    downloadButton.style.color = 'white';
    downloadButton.style.paddingLeft = '10px';
    downloadButton.style.fontSize = '11px';
    downloadButton.innerHTML = 'DOWNLOAD NOW';
    downloadButton.onmouseover = downloadButtonOver;
    downloadButton.onmouseout = downloadButtonOut;
    downloadButton.onmousedown = downloadButtonDown;
    downloadButton.onmouseup = downloadButtonOver;
    downloadButton.onclick = function() { window.open('http://itunes.apple.com/app/planet-wheel/id370367677?mt=8'); };

    // 3D iPhone graphic
    var iPhone = createElement('img','themePageTop');
    iPhone.style.display = 'block';
    iPhone.style.position = 'absolute';
    iPhone.src = ''+root+'themes/planet-wheel/iphone.png?v=2';
    iPhone.width = 113;
    iPhone.height = 159;
    iPhone.style.top = '10px';
    iPhone.style.right = '20px';
    iPhone.style.zIndex = '10';
    iPhone.style.cursor = 'pointer';
    iPhone.onclick = moreInfo;

    // Planet graphic
    var planet = createElement('img','themePageTop');
    planet.style.display = 'block';
    planet.style.position = 'absolute';
    planet.src = ''+root+'themes/planet-wheel/planet.png';
    planet.width = 300;
    planet.height = 300;
    planet.style.top = '100px';
    planet.style.left = '-50px';
    planet.style.zIndex = '-1';

    // Sun
    var sun = createElement('img','themePageTop');
    sun.style.display = 'block';
    sun.style.position = 'absolute';
    sun.src = ''+root+'themes/planet-wheel/sun.png';
    sun.width = 166;
    sun.height = 424;
    sun.style.top = '300px';
    sun.style.right = '-160px';
    sun.style.zIndex = '-1';

    // Large wheel graphic - left-hand side
    wheelLargeLeft = createElement('img','themePageTop');
    wheelLargeLeft.style.display = 'block';
    wheelLargeLeft.style.position = 'absolute';
    wheelLargeLeft.src = ''+root+'themes/planet-wheel/wheel-large.png';
    wheelLargeLeft.width = 328;
    wheelLargeLeft.height = 325;
    wheelLargeLeft.style.top = '0px';
    wheelLargeLeft.style.left = '-110px';
    wheelLargeLeft.style.zIndex = '-1';
    wheelLargeLeft.style.webkitTransition = 'all 5s linear';
    wheelLargeLeft.onload = animateLargeLeft;

    // Large wheel graphic - right-hand side
    wheelLargeRight = createElement('img','themePageTop');
    wheelLargeRight.style.display = 'block';
    wheelLargeRight.style.position = 'absolute';
    wheelLargeRight.src = ''+root+'themes/planet-wheel/wheel-large.png';
    wheelLargeRight.width = 328;
    wheelLargeRight.height = 325;
    wheelLargeRight.style.top = '230px';
    wheelLargeRight.style.right = '-90px';
    wheelLargeRight.style.zIndex = '-5';
    wheelLargeRight.style.webkitTransition = 'all 5s linear';
    wheelLargeRight.onload = animateLargeRight;

    // Small wheel graphic - right-hand side
    wheelSmallRight = createElement('img','themePageTop');
    wheelSmallRight.style.display = 'block';
    wheelSmallRight.style.position = 'absolute';
    wheelSmallRight.src = ''+root+'themes/planet-wheel/wheel-small.png';
    wheelSmallRight.width = 142;
    wheelSmallRight.height = 145;
    wheelSmallRight.style.top = '430px';
    wheelSmallRight.style.right = '-110px';
    wheelSmallRight.style.zIndex = '-5';
    wheelSmallRight.style.webkitTransition = 'all 5s linear';
    wheelSmallRight.onload = animateSmallRight;
    
}