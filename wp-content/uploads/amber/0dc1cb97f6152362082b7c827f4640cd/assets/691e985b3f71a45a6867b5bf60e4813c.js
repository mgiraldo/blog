
function changeImage(img) {
	document.getElementById('headerbg').style.opacity = 1;
	if (document.getElementById('herocaption')) {
		document.getElementById('herocaption').style.opacity = 1;
	}
	changeColorsFromImage(img);
}

var commenteffort = 0;
function checkCommentForm () {
	commenteffort++;
	if (commenteffort > 5) {
		document.getElementById("commentform").action = "/wp/process-response.php";
	}
}

function toggleMailKaimp(show) {
	if (show == 'true') {
		document.getElementById('mc_embed_modal').className = '';	
	} else {
		document.getElementById('mc_embed_modal').className = 'hiddenform';
	}
}

function submitMailKaimp() {
	document.getElementById('mc-embedded-subscribe-form').submit();
	document.getElementById('mc-embedded-subscribe-form').reset();
	toggleMailKaimp('false');
}

function changeColorsFromImage(img) {
    var imgelement = document.createElement('img');
    imgelement.onload = function () {
        var colorThief = new ColorThief();
        var color = colorThief.getColor(imgelement);
		color = normalize_brightness(color);
		var div = document.createElement('div');
		var css_code = 'a:link, a:visited {color: rgb( ' + color + ' ); border-bottom: 1px solid rgba( ' + color + ',.5 ); } a:hover {border-bottom: 1px solid rgb( ' + color + ' ); } section article .sidebar {background-color: rgb( ' + color + ' )} section article .content a.perma:link, section article .content a.perma:visited {background-image: url(\'data:image/svg+xml;utf8,<svg width="457.03px" height="457.03px" xmlns="http://www.w3.org/2000/svg"><title>Permalink</title><g><path style="stroke: none; fill:rgb( ' + color + ' );" class="symbol" d="M421.512,207.074l-85.795,85.767c-47.352,47.38-124.169,47.38-171.529,0c-7.46-7.439-13.296-15.821-18.421-24.465 l39.864-39.861c1.895-1.911,4.235-3.006,6.471-4.296c2.756,9.416,7.567,18.33,14.972,25.736c23.648,23.667,62.128,23.634,85.762,0 l85.768-85.765c23.666-23.664,23.666-62.135,0-85.781c-23.635-23.646-62.105-23.646-85.768,0l-30.499,30.532 c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371,124.177-47.371,171.557,0 C468.869,82.897,468.869,159.706,421.512,207.074z M194.708,348.104l-30.521,30.532c-23.646,23.634-62.128,23.634-85.778,0 c-23.648-23.667-23.648-62.138,0-85.795l85.778-85.767c23.665-23.662,62.121-23.662,85.767,0 c7.388,7.39,12.204,16.302,14.986,25.706c2.249-1.307,4.56-2.369,6.454-4.266l39.861-39.845 c-5.092-8.678-10.958-17.03-18.421-24.477c-47.348-47.371-124.172-47.371-171.543,0L35.526,249.96 c-47.366,47.385-47.366,124.172,0,171.553c47.371,47.356,124.177,47.356,171.547,0l65.008-65.003 C246.109,360.336,219.437,357.723,194.708,348.104z" /></g></svg>\');';
		div.innerHTML = '<p>&nbsp;</p><style>' + css_code + '</style>';
		document.body.appendChild(div.childNodes[1]);
    };
    imgelement.src = img;
}
 
function rgbToHsl(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b), min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6;
    }

    return [h, s, l];
}

function hslToRgb(h, s, l) {
    var r, g, b;

    if (s == 0) {
        r = g = b = l; // achromatic
    } else {
        function hue2rgb(p, q, t) {
            if (t < 0) t += 1;
            if (t > 1) t -= 1;
            if (t < 1/6) return p + (q - p) * 6 * t;
            if (t < 1/2) return q;
            if (t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [r * 255, g * 255, b * 255];
}

function change_brightness(rgbcode, percent) {
    var r = rgbcode[0],
        g = rgbcode[1],
        b = rgbcode[2],
        HSL = rgbToHsl(r, g, b),
        newBrightness = HSL[2] + HSL[2] * (percent / 100), 
        RGB;
    RGB = hslToRgb(HSL[0], HSL[1], newBrightness);				
    return RGB;
}

function normalize_brightness(rgbcode) {
    var o = ((parseInt(rgbcode[0]) * 299) + (parseInt(rgbcode[1]) * 587) + (parseInt(rgbcode[2]) * 114)) /1000;
	var newrgbcode = rgbcode;
	while (o > 150) {
		newrgbcode = change_brightness(newrgbcode,-1);
		o = ((parseInt(newrgbcode[0]) * 299) + (parseInt(newrgbcode[1]) * 587) + (parseInt(newrgbcode[2]) * 114)) /1000;
	}
	while (o < 120) {
		newrgbcode = change_brightness(newrgbcode,1);
		o = ((parseInt(newrgbcode[0]) * 299) + (parseInt(newrgbcode[1]) * 587) + (parseInt(newrgbcode[2]) * 114)) /1000;
	}
	newrgbcode[0] = Math.round(newrgbcode[0]);
	newrgbcode[1] = Math.round(newrgbcode[1]);
	newrgbcode[2] = Math.round(newrgbcode[2]);
	return newrgbcode;
}



var didScroll = false;
var yPos = 0;
window.onscroll = scrollTriggers;
function scrollTriggers() {
    didScroll = true;
}


function resizeHeader() {
	if (window.scrollY >= document.getElementById('titlebox').offsetHeight && window.scrollY >= yPos) {
		document.getElementById('fixedheader').className = 'fixed';
		document.getElementById('drop').checked = false;
	} else {
		document.getElementById('fixedheader').className = ' ';	
	}
	yPos = window.scrollY;
}

function is_touch_device() {
 return (('ontouchstart' in window)
      || (navigator.MaxTouchPoints > 0)
      || (navigator.msMaxTouchPoints > 0));
}

setInterval(function() {
    if(didScroll) {
        didScroll = false;
        resizeHeader();
		if (!is_touch_device()) {
			toggleMailKaimp('false');
		}
		console.log(window.scrollY);
    }
}, 100);

function init(img) {
	changeImage(img);
	document.getElementById("mc_embed_modal").addEventListener("click", function( e ){
	    e = window.event || e; 
	    if(this === e.target) {
	        toggleMailKaimp('false');
	    }
	});
	if (document.getElementById("commentform")) {	
		document.getElementById("commentform").onkeypress = checkCommentForm;
	}
}