var themeName = null;

function resetContentHeight() {
  var displayHeight;
  if (window.innerHeight) {
    displayHeight = window.innerHeight;
  } else {
    displayHeight = document.body.clientHeight;
  }
  var bodyHeight = (displayHeight - 240);
  if (navigator.appName.indexOf('Internet Explorer') == -1) {
	  document.getElementById('mainContentWrapper').style.minHeight = bodyHeight + 'px';
  } else {
	  document.getElementById('mainContentWrapper').style.height = bodyHeight + 'px';
	  document.getElementById('mainContentWrapper').style.minHeight = bodyHeight + 'px';
  }
}

function goToHomepage() {
  if (typeof homeUrl !== 'undefined') {
    location.href = homeUrl;
  } else {
    location.href = 'http://www.glyphweb.com/arda/';
  }
}

function activatePalantirOpacity() {
  document.getElementById('palantirImage').style.opacity = 1.0;
}

function palantirExists(palantirImage) {

  var exists = false;

  if (palantirImage == 'ainu') { exists = true; }
  if (palantirImage == 'ainur') { exists = true; }
  if (palantirImage == 'cave') { exists = true; }
  if (palantirImage == 'city') { exists = true; }
  if (palantirImage == 'drag') { exists = true; }
  if (palantirImage == 'enemy') { exists = true; }
  if (palantirImage == 'ents') { exists = true; }
  if (palantirImage == 'fields') { exists = true; }
  if (palantirImage == 'forest') { exists = true; }
  if (palantirImage == 'hills') { exists = true; }
  if (palantirImage == 'horse') { exists = true; }
  if (palantirImage == 'ice') { exists = true; }
  if (palantirImage == 'isla') { exists = true; }
  if (palantirImage == 'keys') { exists = true; }
  if (palantirImage == 'land') { exists = true; }
  if (palantirImage == 'lang') { exists = true; }
  if (palantirImage == 'maiar') { exists = true; }
  if (palantirImage == 'raceothe') { exists = true; }
  if (palantirImage == 'ring') { exists = true; }
  if (palantirImage == 'river') { exists = true; }
  if (palantirImage == 'sea') { exists = true; }
  if (palantirImage == 'space') { exists = true; }
  if (palantirImage == 'time') { exists = true; }
  if (palantirImage == 'twotrees') { exists = true; }

  return exists;

}

function loadPalantirImage(palantirImage) {
  
	var userAgent = navigator.userAgent;
	var isWebKit = (userAgent.indexOf('AppleWebKit') != -1);
	var isGecko = (userAgent.indexOf('Gecko') != -1);

	if ((palantirImage == 'ainur') || (palantirImage == 'maiar')) {
	  palantirImage = 'ainu';
	}
  
    var palantir = document.createElement('img');
    var parent = document.getElementById('palantirHeader');
    parent.appendChild(palantir);
    palantir.style.display = 'block';
    palantir.style.position = 'absolute';
    palantir.id = 'palantirImage';
    palantir.src = '../_images-2012/palantir-'+palantirImage+'.png';
    palantir.width = 156;
    palantir.height = 170;
    palantir.style.top = '-15px';
    palantir.style.left = '-23px';
    palantir.style.zIndex = '30';
    palantir.style.cursor = 'pointer';
    palantir.onclick = goToHomepage;

    var isWebKit = (userAgent.indexOf('AppleWebKit') != -1);
    if (isWebKit) {
	palantir.style.opacity = 0.0;
	palantir.style.webkitTransition = 'opacity 5s ease-in';
	palantir.style.webkitPerspective = 1000;
        setTimeout('activatePalantirOpacity()',250);
    }

}

function initHomepageImage(palantirImage) {
    if ((arguments.length > 0) && (palantirExists(palantirImage))) {
       loadPalantirImage(palantirImage);
    }
	var imageCount = 8;
	var imageId = Math.floor(Math.random()*imageCount+1);
    if (document.getElementById('homepageImage')) {
	    document.getElementById('homepageImage').src = '_images-2012/homepage_image_'+imageId+'.png';
    }
    if (document.getElementById('meaGraphic')) {
	    document.getElementById('meaGraphic').style.backgroundImage = 'url(_images-2012/homepage_image_'+imageId+'.png)';
    }
  resetContentHeight();
  if (window.addEventListener) {
    window.addEventListener('resize',resetContentHeight);
  } else {
    window.attachEvent('onresize',resetContentHeight);
  }
  
}

function sidebarToggleMenu(section) {
    
    var sidebarMenu = document.getElementById('sidebarMenu'+section);
    var sidebarButton = document.getElementById('sidebarButton'+section);
    
    var menuOpen = (sidebarMenu.style.display != 'none');
    
    if (menuOpen) {
        sidebarMenu.style.display = 'none';       
        sidebarButton.innerHTML = '<img src="_images-2012/sidebar_button_expand.png" width="7" height="6">';       
    } else {
        sidebarMenu.style.display = '';       
        sidebarButton.innerHTML = '<img src="_images-2012/sidebar_button_collapse.png" width="7" height="6">';
    }
    
}

var activeMenu = null;
var menuTimer;

function getMenuId(caller) {
    var menuId = caller.id.replace('menuItem','');
    menuId = menuId.replace('dropdownMenu','');
    return menuId;
}

function activateMenu(caller) {
    
    clearTimeout(menuTimer);    
    var menuId = getMenuId(caller);

    if (activeMenu != menuId) {
        closeMenu(activeMenu);
    }

    if (! activeMenu) {
        var menu = document.getElementById('dropdownMenu'+menuId);
        menu.style.left = (caller.offsetLeft-5)+'px';
        menu.style.display = 'block';
        activeMenu = menuId;
        document.getElementById('menuItem'+menuId).className = 'activeMenu';
    }
    
}

function hideMenu(caller,forceClose) {
    var menuId = getMenuId(caller);
    if (! forceClose) {
        menuTimer = setTimeout('closeMenu(\''+menuId+'\')',250);
    } else {
        closeMenu(menuId);
    }
}

function closeMenu(menuId) {
    if (menuId != null) {
        document.getElementById('dropdownMenu'+menuId).style.display = 'none';
        document.getElementById('menuItem'+menuId).className = '';
        activeMenu = null;
    }
}

function expandStory(id) {
    document.getElementById('show'+id).style.display = 'none';
    document.getElementById('news'+id).style.display = 'block';
    return false;
}

function showFullList(mobile) {
  // Shows a full list of See Also entries
  if (arguments.length < 1) {
	mobile = false;
  }
  var device = (mobile) ? 'Mobile' : '';
  document.getElementById('seeAll'+device).style.display = 'inline';
  document.getElementById('seeMore'+device).style.display = 'none';
  return false;
}

function titleSelect(select) {
  var index = select.selectedIndex;
  var target = select.options[index].value;
  if (target != '') {
    location.href = target;
  }
}
