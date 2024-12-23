var isNav = navigator.appName.indexOf("Netscape") != -1;
var isIE  = navigator.appName.indexOf("Microsoft") != -1;
var isMac = (navigator.appVersion.indexOf("Macintosh") >= 0);

var gVersion = GetVersion();

function DebugWriteCSS() 
{
	if (isIE) {
		if (!isMac)
			sCSS = "nng-ie.css";
		else if (gVersion >= 5) 
			sCSS = "nng-ie.css";
		else
			sCSS = "nng.css";
	}
	else if (isNav) {
		if (!isMac) 
			sCSS = "nng-nav.css";
		else if (gVersion >= 5)
			sCSS = "nng-nav.css";
		else
			sCSS = "nng.css";
	}
	else sCSS = "nng.css";

	if (sCSS.length > 0) document.write("nng.js writes: &lt;link rel=\"stylesheet\" href=\"http://www.asktog.com/style/" + sCSS + "\"&gt;");

}

function WriteCSS() 
{
	if (isIE) {
		if (!isMac)
			sCSS = "nng-ie.css";
		else if (gVersion >= 5) 
			sCSS = "nng-ie.css";
		else
			sCSS = "nng.css";
	}
	else if (isNav) {
		if (!isMac) 
			sCSS = "nng-nav.css";
		else if (gVersion >= 5)
			sCSS = "nng-nav.css";
		else
			sCSS = "nng.css";
	}
	else sCSS = "nng.css";
		
	if (sCSS.length > 0) document.write("<link rel=\"stylesheet\" href=\"http://www.asktog.com/style/" + sCSS + "\">");
}



// Get the browser version.  Digs into appVersion for IE, since MS doesn't 
// understand version numbers. Otherwise just parses the appVersion.

function GetVersion() {
	var s = navigator.appVersion;
	var n = s.indexOf("MSIE");
	var v = 0;

	// Grab the first number appearing after "MSIE"
	if (n != -1) {
		v = parseFloat(s.substr(n + 4));
	}
	else {
		v = parseFloat(s);
	}
	return v;
}