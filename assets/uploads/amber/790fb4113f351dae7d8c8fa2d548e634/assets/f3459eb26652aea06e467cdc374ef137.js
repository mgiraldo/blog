function installExtension(aEvent, extensionName, iconURL) {
   var params = new Object();
   params[extensionName] =
	    {
        URL: aEvent.target.href ? aEvent.target.href : aEvent.target.parentNode.href,
		IconURL: iconURL,
	        toString: function () { return this.URL; }
            };

   var res = InstallTrigger.install(params);
   if (!res) {
	//alert("If you see a yellow bar at the top of your browser - click 'Allow'");
   }

   return false;
}
