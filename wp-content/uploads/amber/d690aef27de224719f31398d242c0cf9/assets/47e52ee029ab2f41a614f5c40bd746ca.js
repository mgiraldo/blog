/**
 *  Here is the javascript code for Folklore Story View.
 *
 * @author Andy Hertzfeld (andy@differnet.com)  August 2013
 *
 */

/**
 * Define namespace for Folklore code.
 */
var folklore = folklore || {};


/**
 * Constructor for the folklore story view handler.
 *
 * @param {Object} opt_options optional configuration options.
 * @constructor
 */
folklore.Story = function(opt_options) {
  this.options_ = opt_options || {};
  this.fetchElementsFromDom_();

  // Bind handlers.  
  this.showCommentsButtonHandler_ = folklore.Story.bind(this.showCommentsButtonClick_, this);
  this.addCommentsButtonHandler_ = folklore.Story.bind(this.addCommentButtonClick_, this);
  this.editCommentButtonHandler_ = folklore.Story.bind(this.editCommentButtonClick_, this);
  this.editButtonClickHandler_ = folklore.Story.bind(this.editButtonPaneClick_, this);
  this.addHandlers_();  
};


folklore.Story.bind = function(fn, selfObj, var_args) {
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
 * Fetch the elements to listen to from the DOM.
 */
folklore.Story.prototype.fetchElementsFromDom_ = function() {
  this.commentsContainer_ = document.getElementsByClassName('story-comments-container')[0];
  this.addCommentContainer_ = document.getElementsByClassName('story-comment-add')[0];
  this.commentsSection_ = document.getElementsByClassName('comments-section')[0];
  
  this.commentsArrow_ = document.getElementsByClassName('story-comments-arrow')[0];
  this.commentsButton_ = document.getElementsByClassName('story-comments-show-button')[0];
  this.addCommentButton_ = document.getElementsByClassName('story-comments-add-button')[0];

  this.commentEditButtons_ =   document.getElementsByClassName('story-comment-edit-button');
  this.ratingDisplay_ = document.getElementsByClassName('story-rating-value')[0];
  
  // Set the state of the show/hide button and arrow
  var isOpen = this.commentsContainer_.style.display != 'none';
  this.commentsButton_.innerHTML = isOpen ? 'Hide Comments' : 'Show Comments';
  this.commentsArrow_.src = isOpen ? 'images/opentri.gif' : 'images/triangle.gif';
};


/**
 * Handle clicks on the show comments button.
 */
folklore.Story.prototype.showCommentsButtonClick_ = function(event) {
  if (this.commentsContainer_.style.display == 'none') {
    this.commentsContainer_.style.display = 'block';
    this.commentsButton_.innerHTML = 'Hide Comments';
    this.commentsArrow_.src = 'images/opentri.gif';
  } else {
    this.commentsContainer_.style.display = 'none';
    this.commentsButton_.innerHTML = 'Show Comments';
    this.commentsArrow_.src = 'images/triangle.gif';
  }
};


/**
 * Handle clicks on the add comment button.
 */
folklore.Story.prototype.addCommentButtonClick_ = function(event) {
  this.commentsContainer_.style.display = 'block';
  this.commentsButton_.innerHTML = 'Hide Comments';
  this.commentsArrow_.src = 'images/opentri.gif';
  
  this.addCommentContainer_.style.display = 'block';
  window.scrollTo(0, document.body.scrollHeight);
};

/**
 * Utility to extract id of current comment.
 */
folklore.Story.prototype.getCommentId_ = function() {
  var idContainer = this.editedComment_.getElementsByClassName('story-comment-id')[0];
  return idContainer.innerHTML;
};


/**
 * Utility to post data to a URL.
 */
folklore.Story.prototype.postData_ = function(url, data, completionRoutine) {
  var xmlhttp;
  if (window.XMLHttpRequest)
    { // code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp = new XMLHttpRequest();
    }
  else
    {  // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
  xmlhttp.open("POST", url, true);
  
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && (xmlhttp.status == 200 || xmlhttp.status == 204)) {
        completionRoutine(xmlhttp.responseText);
    }
  }
  xmlhttp.send(data);
};

/**
 * Handle radio-button rating changes by xhr-ing to the server and updating the value.
 */
folklore.Story.prototype.updateRating = function(event, story) {
  var formData = new FormData();
  formData.append('project',  fProjectName);
  formData.append('story', fStoryName);
  formData.append('value', event.target.value);
   
 // Post the change to the server.
 this.postData_("/updaterating", formData, folklore.Story.bind(this.doneUpdateRating_, this));
 event.preventDefault();
 return false;
};

/**
 * Handle finishing updating the rating by displaying the new average value.
 */
folklore.Story.prototype.doneUpdateRating_ = function(responseText) {
  responseDecimal = responseText.charAt(0) + '.' + responseText.substring(1);
  this.ratingDisplay_.innerHTML = 'Overall Rating:&nbsp;' + responseDecimal;
};

/**
 * Tell the server about the new comment text.
 */
folklore.Story.prototype.saveCommentText_ = function() {
  var textArea = this.editedComment_.getElementsByClassName('story-edit-comment-area')[0];
  var commentText = textArea.value;
  var formData = new FormData();
  formData.append('id',  this.getCommentId_());
  formData.append('body', commentText);
  
  // Update the comment in the DOM
 var editBodyElement = this.editedComment_.getElementsByClassName('story-comment-body')[0];
 editBodyElement.innerHTML = commentText;
 
 // Post the change to the server.
this.postData_("/UpdateCommentById", formData, folklore.Story.bind(this.doneEditComment_, this));
};


/**
 * Tell the server to delete the current comment, and refresh the DOM to reflect it.
 */
folklore.Story.prototype.deleteComment_ = function() {
  var formData = new FormData();
  formData.append('id',  this.getCommentId_());
  this.doneEditComment_();
  this.postData_("/DeleteCommentById", formData, folklore.Story.bind(this.refreshComments, this));
};


/**
 * Handle clicks on one of the edit comment buttons.
 */
folklore.Story.prototype.editButtonPaneClick_ = function(event) {
   // case out on the class of the clicked button.
   var buttonType = event.target.className;
   if (buttonType == 'edit-comment-button-cancel') {
     this.doneEditComment_();
   } else if (buttonType == 'edit-comment-button-save') {
     this.saveCommentText_();
   } else if (buttonType == 'edit-comment-button-delete') {
     this.deleteComment_();
   }
};


/**
 * Handle clicks on an edit comment button.
 */
folklore.Story.prototype.editCommentButtonClick_ = function(event) {
  // Find the appropriate container element.
  this.activeEditButton_ = event.target;
  this.editedComment_ = event.target.parentNode;
  
  // Extract the comment content and hide the display element.
  var editBodyElement = this.editedComment_.getElementsByClassName('story-comment-body')[0];
  var commentContent = editBodyElement.innerHTML;
  editBodyElement.style.display = 'none';
  
  // Generate the edit field.
  var textArea = document.createElement('textarea');
  textArea.className = 'story-edit-comment-area';
  textArea.value = commentContent;
  this.editedComment_.appendChild(textArea);

  // Generate the buttons.
  var buttonArea = document.createElement('div');
  buttonArea.className = 'story-edit-comment-buttons';
  this.editedComment_.appendChild(buttonArea);
  
  var saveButton = document.createElement('button');
  saveButton.className = 'edit-comment-button-save';
  saveButton.innerHTML = 'Save Changes';
  buttonArea.appendChild(saveButton);
  
  var cancelButton = document.createElement('button');
  cancelButton.className = 'edit-comment-button-cancel';
  cancelButton.innerHTML = 'Cancel Edit';
  buttonArea.appendChild(cancelButton);

  var deleteButton = document.createElement('button');
  deleteButton.className = 'edit-comment-button-delete';
  deleteButton.innerHTML = 'Delete Comment';
  buttonArea.appendChild(deleteButton);

  // Hide the edit button.
  this.activeEditButton_.style.display = "none";
    
  // Listen for button clicks.
  buttonArea.addEventListener('click', this.editButtonClickHandler_, false);
};

/**
 * Terminate comment editing mode by hiding the edit elements
 * and restoring the display element.
 */
folklore.Story.prototype.doneEditComment_ = function() {
  var buttonArea = this.editedComment_.getElementsByClassName('story-edit-comment-buttons')[0];
  buttonArea.removeEventListener('click', this.editButtonClickHandler_, false);
  this.editedComment_.removeChild(buttonArea);
  
  var textArea = this.editedComment_.getElementsByClassName('story-edit-comment-area')[0];
  this.editedComment_.removeChild(textArea);

  var editBodyElement = this.editedComment_.getElementsByClassName('story-comment-body')[0];
  editBodyElement.style.display = '';

  this.activeEditButton_.style.display = '';
}


folklore.Story.prototype.refreshComments = function(event) {
    var self = this;
    this.removeHandlers_();
    window.setTimeout(function() {
      var xmlhttp;
      if (window.XMLHttpRequest)
        {// code for IE7+, Firefox, Chrome, Opera, Safari
          xmlhttp = new XMLHttpRequest();
        }
      else
        {// code for IE6, IE5
           xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
        }
  
        // build url
        url = "FetchComments?project=" + fProjectName + "&story=" + fStoryName;
        xmlhttp.open("GET", url, true);
  
        xmlhttp.onreadystatechange = function() {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            
            var temp = document.createElement('textarea');
            temp.innerHTML = xmlhttp.responseText;
            var unescaped = temp.childNodes === 0 ? "" : temp.childNodes[0].nodeValue;
            
            self.commentsSection_.innerHTML = unescaped;
            self.fetchElementsFromDom_();
            self.addHandlers_();
          }
        }
     xmlhttp.send();
  }, 1000);  
};

/**
 * Add the event listeners.
 */
folklore.Story.prototype.addHandlers_ = function() {
  // Listen for clicks on the show comments button
  this.commentsButton_.addEventListener('click', this.showCommentsButtonHandler_, false);
  this.commentsArrow_.addEventListener('click', this.showCommentsButtonHandler_, false); 
  this.addCommentButton_.addEventListener('click', this.addCommentsButtonHandler_, false); 
  
  for (var i = 0; i < this.commentEditButtons_.length; ++i) {
    var editButton = this.commentEditButtons_[i];
    editButton.addEventListener('click', this.editCommentButtonHandler_, false); 
  }
};

/**
 * Remove the event listeners.
 */
folklore.Story.prototype.removeHandlers_ = function() {
  // Listen for clicks on the show comments button
  this.commentsButton_.removeEventListener('click', this.showCommentsButtonHandler_, false);
  this.commentsArrow_.removeEventListener('click', this.showCommentsButtonHandler_, false); 
  this.addCommentButton_.removeEventListener('click', this.addCommentsButtonHandler_, false); 

  for (var i = 0; i < this.commentEditButtons_.length; ++i) {
    var editButton = this.commentEditButtons_[i];
    editButton.removeEventListener('click', this.editCommentButtonHandler_, false); 
  }

};

folklore.Story.prototype.unload = function() {
};

