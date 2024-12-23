/**
 *  Here is the javascript code for Folklore project view.
 *
 * @author Andy Hertzfeld (andyh@google.com)  August 2012
 *
 */

/**
 * Define namespace for Folklore code.
 */
var folklore = folklore || {};


/**
 * Constructor for the folklore project view handler.
 *
 * @param {Object} opt_options optional configuration options.
 * @constructor
 */
folklore.Project = function(opt_options) {
  this.options_ = opt_options || {};
 
  this.projectContainer_ = document.getElementsByClassName('project-container')[0];
  this.projectContentContainer_ = document.getElementsByClassName('project-content-container')[0];

  this.searchButton_ = document.getElementsByClassName('search-button')[0];
  this.searchField_ = document.getElementsByClassName('search-field')[0];
  
  this.initHandlers_();
  this.adjustToSize_();
};

// Bind utility
folklore.Project.bind = function(fn, selfObj, var_args) {
  var context = selfObj || goog.global;

  if (arguments.length > 2) {
    var boundArgs = Array.prototype.slice.call(arguments, 2);
    return function() {
      // Prepend the bound arguments to the current arguments.
      var newArgs = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(newArgs, boundArgs);
      return fn.apply(context, newArgs);
    };

  } else {
    return function() {
      return fn.apply(context, arguments);
    };
  }
};


/**
 * Add the story body HTML to the document.
 */
folklore.Project.prototype.addStoryBody = function(responseHTML, storyBodyContainer) {
  storyBodyContainer.innerHTML = responseHTML;
};


/**
 * Fetch story body from server.
 */
folklore.Project.prototype.fetchStoryBody = function(url, storyBodyContainer) {
  var xmlhttp;
  var self = this;
  if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
  else
    {  // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
  xmlhttp.open("GET", url, true);
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        self.addStoryBody(xmlhttp.responseText, storyBodyContainer);    
    }
  }
  xmlhttp.send();
};


/**
 * Handle clicks on the search button by formulating a URL, making an xhr to retrieve
 * HTML-formatted search results, and then putting them in the DOM.
 */
folklore.Project.prototype.handleSearchClick_ = function() {
  var queryField = document.getElementsByClassName('search-field')[0];
  if (!queryField.value) {
    return;
  }
   
  var xmlhttp;
  var self = this;
  url = '/Search?project=' + fProjectName + '&q=' + encodeURIComponent(queryField.value) +
      '&sindex=' + fStoryIndex;

  if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
  else
    {  // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
  xmlhttp.open("GET", url, true);
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      self.projectContentContainer_.innerHTML = xmlhttp.responseText;
      queryField.value = '';
    }
  }
  xmlhttp.send();
};

/**
 * Handle keystrokes in the search field by checking for CR.
 */
folklore.Project.prototype.handleSearchKeyUp_ = function(event) {
  if (event.keyCode == 13) {
    this.handleSearchClick_();
  }
};

/**
 * Handle clicks on the open/close triangles by listening to clicks anywhere in the project body.
 */
folklore.Project.prototype.handleProjectClick_ = function(event) {
  if (event.target.className == 'story-index-triangle') {
    var link = event.target.parentNode.getElementsByTagName('a')[0];
    var isOpen = event.target.src.indexOf('opentri.gif') > -1;
    
    var indexEntryContainer = event.target.parentNode.parentNode;
    var storyViews = indexEntryContainer.getElementsByClassName('story-view-body');
    var storyView = null;
    if (storyViews.length > 0) {
      storyView = storyViews[0];
    }
    
    if (isOpen) {
      // Close the story by hiding the story view.
      event.target.src = 'images/triangle.gif';
      if (storyView) {
        storyView.style.display = 'none';
      }
      
    } else {
      // Open the story by showing the story view if present, or creating it if it's not.
      event.target.src = 'images/opentri.gif';
      if (storyView) {
        storyView.style.display = 'block';
      } else {
        var container = document.createElement('div');
        container.className = 'story-view-body';
        indexEntryContainer.appendChild(container);
        var url = link.href + "&bodyOnly=1";
        this.fetchStoryBody(url, container);
      }
    }   
   }
  return true;
};


/**
 * Initialize the event handlers.
 */
folklore.Project.prototype.initHandlers_ = function() {
  this.projectContainer_.addEventListener('click', folklore.Project.bind(this.handleProjectClick_, this), false);
  this.searchButton_.addEventListener('click', folklore.Project.bind(this.handleSearchClick_, this), false);
  this.searchField_.addEventListener('keyup', folklore.Project.bind(this.handleSearchKeyUp_, this), false);

  window.addEventListener('resize', folklore.Project.bind(this.adjustToSize_, this), false);
  window.addEventListener('orientationchange', folklore.Project.bind(this.adjustToSize_, this), false);
};

folklore.Project.prototype.setSidebarVis_ = function(whichSidebar, isVisible) {
  var element = document.getElementsByClassName(whichSidebar + '-sidebar-visible')[0];
  window.console.log('element is ' + element);
  
  if (element) {
    element.style.display = isVisible ? 'inline' : 'none';
  } else {
    window.console.log('couldnt get ' + whichSidebar);
  }
};

folklore.Project.prototype.adjustToSize_ = function() {
  var isLarge = window.screen.width >= 600;
  var o = window.orientation;
  var isPortrait = (o != undefined) && (o == 0 || o == 180);
  var isDesktop = o === undefined;
  
  var leftVis = isDesktop || (isLarge && !isPortrait);
  var rightVis = isDesktop || isLarge || !isPortrait;
    
  window.console.log('in adjust2');

  var baseSize = '17px'
  var container = document.getElementsByClassName('project-content-container')[0];
  if (!leftVis && !rightVis) {
    baseSize = '36px';
  }
  container.style.fontSize = baseSize;
  
  window.console.log('islarge ' + isLarge + ' portrait ' + isPortrait);
  
  this.setSidebarVis_('left', leftVis);
  this.setSidebarVis_('right', rightVis);  
}

folklore.Project.prototype.unload = function() {
};

