/**
*  DIMG Ad Master - dimgAdMaster.js
**/

var dimgAdDebug         = 0;
var dimgAdServiceUrl    = "//analytics.disneyinternational.com/ads/"; //WDIG Analytics Base URL
var browser         = navigator.appName;
var dimgAdMaster2Endpoint = '//analytics.disneyinternational.com/ads/tagsv2/banner/';
// in case script is already loaded
var dimgAdObj = window.dimgAdObj || {};
var dimgAdSlots = window.dimgAdSlots || [];

/**
 */
function dimgAdLog(str) {
    if (!dimgAdDebug) {
        return false;
    }
    if (typeof(console) != "undefined" && console.debug) {
        console.debug(str);
    }
}


/**
 */
function dimgAdInit()
{
    if(window.location.href.match(/\/#\w*\/?/)) {
        dimgAdObj.url = window.location.href.replace(location.protocol+"//"+location.hostname, "");
    } else {
        dimgAdObj.url = window.location.pathname.toString(); // default behaviour
    }
    dimgAdObj.url = dimgAdObj.url.toLowerCase();
    dimgAdLog("URLPath: " + dimgAdObj.url);
    dimgAdObj.url = dimgAdObj.url.replace(/\/#(\w*)/g, '\/$1');
    dimgAdObj.url = dimgAdObj.url.replace(/\/+/g, '\/');
    dimgAdObj.url = unescape(dimgAdObj.url);
    dimgAdObj.urlArray = dimgAdObj.url.split("/");
    dimgAdObj.urlSite = window.location.host.toString(); //Sitename
    dimgAdObj.urlSite = dimgAdObj.urlSite.toLowerCase();

    dimgAdObj.siteArray = dimgAdObj.urlSite.split(".");
    /* Discard www|www2 part of the domain name */
    if ((dimgAdObj.siteArray[0] === "www") || (dimgAdObj.siteArray[0] === "www2"))
    {
        dimgAdObj.siteArray.shift();
        dimgAdObj.urlSite=dimgAdObj.siteArray.join(".");
    }
}


/**
 */
function DIMADOBJ()
{
    dimgAdObj = this;
    dimgAdObj.h = new Object();
    dimgAdInit();
}

// in case script is already loaded
dimgAdMaster = window.dimgAdMaster || new DIMADOBJ();


/**
 */
function dimgAdDisplayLegacy(adType, customPath) {
    dimgAdDisplay(adType, customPath);
}


/**
 */
function dimgAdDisplay(adType, customPath) {
        var slot = mapLegacyAdTypeToDFP(adType);

        if (!slot) {
            return;
        }

        // global
        dimgAdSlots.push(slot);
        // ok with document.write as dom isn't ready yet...
        // create div for async call
        document.write('<div rel="' + adType + '-xxx" id="' + slot + '"></div>');
        //DisneyAds.display(slot);
        dimgAdLog('dimgAdDisplay(' + adType + ',' + customPath + ')');
}

/**
 * @param string Legacy ad type
 * @return string DFP ad type
 * @throws Exception (unknown ad type)
 */
function mapLegacyAdTypeToDFP(adType) {
    var map = {
        '120x60'                : 'div-skyscraper',
        '120x600'               : 'div-skyscraper',
        '160x600'               : 'div-skyscraper',
        '1x1'                   : 'div-oop',
        '300x250'               : 'div-top-mpu',
        '468x60'                : 'div-top-leader',
        '728x180'               : 'div-top-head',
        '728x270'               : 'div-top-head',
        '728x90'                : 'div-top-leader',
        '750x100'               : 'div-top-head',
        '750x200'               : 'div-top-head',
        '950x200'               : 'div-top-head',
        'banner'                : 'div-top-head',
        'button1'               : 'div-logo',
        'button2'               : 'div-logo',
        'lb_exp'                : 'div-top-leader',
        'leaderboard'           : 'div-top-leader',
        'leaderboard1'          : 'div-top-leader',
        'leaderboard2'          : 'div-inline-head',
        'leaderboard3'          : 'div-inline-head',
        'leaderboard4'          : 'div-lower-head',
        'mh_leaderboard'        : 'div-top-head',
        'mh_leaderboard_botto'  : 'div-lower-head',
        'mh_leaderboard_bottom' : 'div-lower-head',
        'mh_leaderboard_mid1'   : 'div-inline-head',
        'mh_leaderboard_middl'  : 'div-inline-head',
        'mh_leaderboard_top'    : 'div-top-head',
        'mh_mini_mpu'           : 'div-top-mpu',
        'mh_mpu'                : 'div-top-mpu',
        'mh_mpu1'               : 'div-lower-mpu',
        'mh_mpu_1'              : 'div-lower-mpu',
        'mpu'                   : 'div-top-mpu',
        'mpu2'                  : 'div-lower-mpu',
        'mpu_exp'               : 'div-top-mpu',
        'overlay'               : 'div-overlay',
        'postroll'              : 'vast-postroll',
        'preroll'               : 'vast-preroll',
        'skyscraper'            : 'div-skyscraper',
        'ss_exp'                : 'div-skyscraper',
        'video'                 : 'vast-preroll',
        // actual dfp positions
        'div-inline-head'           : 'div-inline-head',
        'div-logo'                  : 'div-logo',
        'div-lower-head'            : 'div-lower-head',
        'div-lower-mpu'             : 'div-lower-mpu',
        'div-oop'                   : 'div-oop',
        'div-overlay'               : 'div-overlay',
        'div-rich-head'             : 'div-rich-head',
        'div-skyscraper'            : 'div-skyscraper',
        'div-top-head'              : 'div-top-head',
        'div-top-leader'            : 'div-top-leader',
        'div-top-leader'            : 'div-top-leader',
        'div-top-mpu'               : 'div-top-mpu',
        'div-video-mpu'             : 'div-video-mpu'
    }
    if (!map[adType]) {
        dimgAdLog("Unknown ad type: " + adType);
        return;
    }
    return map[adType];
}


/**
 */
function dimgCompanionAdDisplay(divId, image, linkTarget)
{
    // should add video-mpu as a banner ad position?
    dimgAdLog('dimgAdDisplay(' + divId + ', ' + image + ', ' + linkTarget + ')');
    //document.getElementById(divId).innerHTML = '<a href="' + linkTarget + '"><img src="' + image + '" /></a>';
}


/**
 */
function DimgAdData()
{
        dimgAdData = this;
        dimgAdData.h = new Object();
        //this.lDisplay = dimgAdDisplayLegacy;
        this.lDisplay = dimgAdDisplay;
        this.display = dimgAdDisplay;
        this.displayCompanionAd = dimgCompanionAdDisplay; // not sure wtf this does
}

// in case script is already loaded
dimgAd = window.dimgAd || new DimgAdData();


/**
 */
function admaster2ParseDomain(domain) {

    domain = domain.replace(/www.|www2./g, "");
    domain = domain.split('.');

    // subdomain if...
    // if last item is 'com' and > 2 items
    // if 2nd item is 'co' and > 3 items
    // if no .co.* or .com and > 2 items
    // *.disney.com
    // *.disneyxx.it
    // *.disney.co.uk
    // *.disneyxx.co.uk
    var result = {
        site: '',
        hub: ''
    };

    if (domain[domain.length-2] == 'com' && domain.length == 3) {
        // for disneyturkiye.com.tr
        result.hub = domain.join('.');
    }
    else if ( (domain[domain.length-1] == 'com' && domain.length > 2)
     || (domain[domain.length-2] == 'co' && domain.length > 3)
     || (domain[domain.length-2] == 'com' && domain.length > 3)
     || (domain[domain.length-1] != 'com' &&  domain[domain.length-2] != 'co' && domain.length > 2)) {
        result.site = domain.shift();
        result.hub = domain.join('.');
    }

    return result
}


/**
 *
 */
function getAdmaster2Params(obj) {
    var hub = obj.urlSite;
    // trim extra / from urlPattern
    var urlPattern = dimgAdMaster.url;
    urlPattern = urlPattern.replace(/^\/+|\/+$/g, "");
    var paramNames = ['site', 'section', 'slug1', 'slug2'];
    var adMaster2Params = {};

    var matchResult = urlPattern.match(/\/demo\//);
    // are we a dev site
    if (matchResult !== null) {
        dimgAdLog('DEMO!');
        urlPattern = urlPattern.slice(matchResult.index+6);
        urlPattern = urlPattern.split('/');

        // hub should be the first item from urlpattern array
        hub = urlPattern.shift();
    }
    else {
        dimgAdLog('REAL!');
        urlPattern = urlPattern.split('/');
    }

    // check to see if we're a subdomain
    var parsedDomain = admaster2ParseDomain(hub);
    if (parsedDomain.hub) {
        hub = parsedDomain.hub;
    }
    if (parsedDomain.site) {
        urlPattern.unshift(parsedDomain.site);
    }


    for (var i=0; i<urlPattern.length; i++) {
        if (undefined !== paramNames[i]) {
            var fieldName = paramNames[i];
            adMaster2Params[fieldName] = urlPattern[i];
        }
    }


    hub = hub.replace(/www.|www2./g, "");
    adMaster2Params.hub = hub;
    // add a sensible default
    if (undefined === adMaster2Params.site) {
        adMaster2Params.site = 'home';
    }

    return adMaster2Params;
}


/**
 */
function getAdmaster2Positions(slots) {
    // get the positions that we need from admaster endpoint
    var positionsRequested = [];
    for (var i=0; i<slots.length; i++) {
        var p = slots[i].replace('div-', '');
        positionsRequested.push(p);
    }

    return positionsRequested.join(',');
}

/**
 * Wait for the legacy page to load then initiate ad serving
 */
var loadEventListener = window.addEventListener ? function (callback) {
    window.addEventListener('load', callback, false);
} : function (callback) {
    window.attachEvent('onload', callback);
}

loadEventListener(function(){

    if (window.dimgAdMasterLoaded !== undefined) {
        // to stop double loading of ads
        dimgAdLog('Ads already Loaded - Abort!');
        return;
    }

    dimgAdLog('Legacy Page Loaded');

    // add the adSlots to dimgAd object so we can
    // tell admaster2 which slots to render
    dimgAd.adSlots = dimgAdSlots;

    // figure out the admaster2 parameters
    var adMaster2Params = getAdmaster2Params(dimgAdMaster);
    adMaster2Params.position = getAdmaster2Positions(dimgAd.adSlots);

    if (adMaster2Params.position.length < 1) {
        dimgAdLog('ABORT - no positions');
        return
    }

    window.dimgAdMasterLoaded = 1;
    dimgAdLog('Loading Ads');
    dimgAdLog(dimgAdSlots);

    var querystring = [];
    for (var key in adMaster2Params) {
      querystring.push(key + '=' + adMaster2Params[key]);
    }

    // try to get legacy cms, otherwise set to unknown
    var disneycms = 'unknown';
    if ('function' === typeof window.getCMS) {
        // getCMS()  comes from http://analytics.disneyinternational.com/analytics/lib/{VERSION}/wdigWebAnalyticsFunctions.js
        disneycms = window.getCMS();
    }

    querystring.push('disneycms=' + disneycms);

    querystring = querystring.join('&');
    dimgAdLog(querystring);

    var s = document.createElement('script');
    var anchor = document.getElementsByTagName('head')[0];
    s.src = dimgAdMaster2Endpoint + '?' + querystring;
    s.async = true;
    anchor.appendChild(s);

});
