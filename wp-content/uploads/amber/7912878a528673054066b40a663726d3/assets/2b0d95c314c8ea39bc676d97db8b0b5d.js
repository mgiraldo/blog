// Get OS
var agt=navigator.userAgent.toLowerCase();
var is_mac = (agt.indexOf("mac")!=-1);
var is_safari = (agt.indexOf("safari")!=-1);

// Set default quantities for dot system and API calls
var maxdots = 1500;
var apilimit = 1500;
		
// Offset for browser bar...
var offset = 0;

// Are we on a mac?
if (is_mac){
	offset = 0;
	maxdots = 1000;
	apilimit = 1000;
}

// Function called from any page to open the applet
function wefeelfine(){
		
	// Get screen dimensions
	if (window.screen){
		
		// Window dimensions
		var w = 947;
		var h = 700;
			
		// Get x/y coordinates for window
		var x=screen.availWidth-12;
		var y=screen.availHeight-60;
			
		// Open in center of screen
		x = (x/2) - (w/2);
		y = (y/2) - (h/2);
		
		// For full screen mode... 
		//var offset = 30;
		//var w=screen.availWidth-12;
		//var h=screen.availHeight-60;
		
		if(is_safari){
			w = 952;
			h = 704;
			resizable = 0;
		}else resizable = 1;
		
		if(is_mac){ // If on a mac, go to warning page
		//	location.href = "http://www.wefeelfine.org/macs.html";
		wefeelfinemac();
		
		}else{
			window.open('http://www.wefeelfine.org/patience.php','wefeelfine','width='+w+',height='+h+',scrollbars=0,status=0,resizable='+resizable+',left='+x+',top='+y);
		}
		
		// Open window at full screen size			
		//window.open('wefeelfine.html','wefeelfine','width='+w+',height='+h+',scrollbars=0,status=0,resizable=1,left='+x+',top='+y);
		
	}	
}

// Function called from any page to open the applet for a MAC
function wefeelfinemac(){
		
	// Get screen dimensions
	if (window.screen){
		
		// Window dimensions
		var w = 947;
		var h = 700;
			
		// Get x/y coordinates for window
		var x=screen.availWidth-12;
		var y=screen.availHeight-60;
			
		// Open in center of screen
		x = (x/2) - (w/2);
		y = (y/2) - (h/2);
		
		if(is_safari){
			w = 952;
			h = 704;
			resizable = 0;
		}else resizable = 1;
		
		window.open('http://www.wefeelfine.org/patience.php?is_mac','wefeelfine','width='+w+',height='+h+',scrollbars=0,status=0,resizable='+resizable+',left='+x+',top='+y);
	}	
}


// Function called each time window is resized	
function getWindowSize(){
		
		var w = 947;
		var h = 700;
		
		if (document.layers) {
			w=window.innerWidth;
			h=window.innerHeight-offset;
		}else if (parseInt(navigator.appVersion)>=5&&navigator.appName=="Netscape") {
			w = document.documentElement.clientWidth;
			h = document.documentElement.clientHeight-offset;
		}else if (document.all) {
			w = document.body.offsetWidth;
			h = document.body.offsetHeight;
		}
		
		if(w < 700) w = 700;
		if(h < 500) h = 500;
		
		//alert("Width: "+w+", Height: "+h);

		document.wefeelfine.setDimensions(w,h);
}
