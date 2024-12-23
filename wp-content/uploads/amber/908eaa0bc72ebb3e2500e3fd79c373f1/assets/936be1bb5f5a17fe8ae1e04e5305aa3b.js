window.onload = function() {
	var winWidth = window.outerWidth ? window.outerWidth : document.body.clientWidth;

	if( winWidth <= 600 ) {
		if( String(window.location).indexOf("#") < 0 ) {
			setTimeout(function(){window.scrollTo(0, 1);}, 100);
		}
	}

	// setup scroll events
	var portfolio = document.getElementById("portfolio");
	if( portfolio ) {
		var cards = document.getElementsByClassName("card");
		var cardTop = getOffset(cards[0]).top;

		// setup array of card positions
		var cards_pos = new Array();
		for( var i=0; i<cards.length; i++ ) {
			cards_pos[i] = getOffset(cards[i]).top;
		}
		console.log("cards_pos", cards_pos);

		var scrollType = (("ontouchmove" in window) || (window.DocumentTouch && document instanceof DocumentTouch)) ? "touchmove" : "scroll";

		window.addEventListener(scrollType, function(e) {
			var top = (document.documentElement && document.documentElement.scrollTop || document.body && document.body.scrollTop || 0);
			var active_card = -1;
			console.log("top", top);

			for( var i=0; i<cards_pos.length; i++ ) {
				var this_card_pos = cards_pos[i];
				var next_card_pos = cards_pos[i+1];

				if( typeof next_card_pos != "undefined" ) {
					if( this_card_pos <= top && top < next_card_pos ) {
						active_card = i;
					}
				} else {
					if( this_card_pos <= top ) {
						active_card = i;
					}
				}
			}

			for( var i=0; i<cards.length; i++ ) {
				cards[i].removeClass("fixed");

				if( i == active_card ) {
					cards[i].addClass("fixed");
				}
			}
		});
	}
	// END setup scroll events

	// setup capacity listeners
	var capacity = document.getElementById("capacity");
	if( capacity ) {
		setupBlockHover();
		setupColEvents();
	}
	// END setup capacity listeners

	setTimeout( function() {
		if( document.getElementById("editor") ) {
			editStart();
		}
	}, 100);

};

function setupBlockHover(type) {
	// hover over blocks
	var blocks = document.getElementsByClassName("block");
	if( blocks ) {
		for( var i=0; i<blocks.length; i++ ) {
			if( type == "remove" ) {
				blocks[i].removeEventListener("mouseover", blockHoverOver);
				blocks[i].removeEventListener("mouseout", blockHoverOut);
			} else {
				blocks[i].addEventListener("mouseover", blockHoverOver);
				blocks[i].addEventListener("mouseout", blockHoverOut);
				blocks[i].addEventListener("click", selectProject);
			}
		}
	}

	// hover over projects
	var projects = document.getElementsByClassName("project");
	if( projects ) {
		for( var i=0; i<projects.length; i++ ) {
			if( type == "remove" ) {
				projects[i].removeEventListener("mouseover", blockHoverOver);
				projects[i].removeEventListener("mouseout", blockHoverOut);
			} else {
				projects[i].addEventListener("mouseover", blockHoverOver);
				projects[i].addEventListener("mouseout", blockHoverOut);
				projects[i].addEventListener("click", selectProject);
			}
		}
	}
}
function blockHoverOver(e) { toggleBlockHover(1, e.target); }
function blockHoverOut(e)  { toggleBlockHover(0, e.target); }
function toggleBlockHover(state, elem) {
	if( elem.getAttribute("data-project-id") ) {
		var project_id = elem.getAttribute("data-project-id");
	} else {
		var project_id = elem.parentNode.getAttribute("data-project-id");
	}

	var proj_blocks = document.getElementsByClassName("project_id_" + project_id); // $(".block[data-project-id=" + project_id + "]");

	if( proj_blocks.length > 0 ) {
		for( var i=0; i<proj_blocks.length; i++ ) {
			if( state == 1 ) {
				proj_blocks[i].addClass("over");
			} else {
				proj_blocks[i].removeClass("over");
			}
		}
	}
}

function selectProject(e) {
	var elem_project_id = document.getElementById("project_id");
	var elem_project_type = document.getElementById("project_type");
	var project_id = elem_project_id.value;

	if( project_id ) {
		// end EDIT mode
		setupBlockHover("add");
		elem_project_id.value = "";
		elem_project_type.value = "";
	} else {
		// start edit mode
		setupBlockHover("remove");

		if( e.target.getAttribute("data-project-id") ) {
			elem_project_id.value = e.target.getAttribute("data-project-id");
			elem_project_type.value = e.target.getAttribute("data-project-type");
		} else {
			elem_project_id.value = e.target.parentNode.getAttribute("data-project-id");
			elem_project_type.value = e.target.parentNode.getAttribute("data-project-type");
		}
	}
}

function setupColEvents() {
	// hover over cols
	var cols = document.getElementsByClassName("col");
	if( cols ) {
		for( var i=0; i<cols.length; i++ ) {
			cols[i].addEventListener("mousemove", colMousePos);
			cols[i].addEventListener("mouseout", function() {
				document.getElementById("day").value = "";
				document.getElementById("hour").value = "";
			});
			cols[i].addEventListener("click", addScheduleItem);
		}
	}
}
function colMousePos(e) {
	var col = e.target;
	var day_field = document.getElementById("day");
	var hour_field = document.getElementById("hour");

	if( col.hasClass("col") ) {
		var col_day = col.getAttribute("data-day");
		day_field.value = col_day;

		// var pos_y = e.pageY - getOffset(col).top;
		var pos_y = (getOffset(col).top + col.clientHeight) - e.pageY;
		var hour = Math.floor(pos_y / 32);
		var hour_adjusted = hour + 8;
		hour_field.value = hour_adjusted;
	} else {
		day_field.value = "";
		hour_field.value = "";
	}
}
function addScheduleItem(e) {
	var this_col = e.target;
	var field_project_id = document.getElementById("project_id");
	var field_project_type = document.getElementById("project_type");
	var field_day = document.getElementById("day");
	var field_hour = document.getElementById("hour");

	var data = {};
	data.project_id = field_project_id.value;
	data.project_type = field_project_type.value;
	data.day = field_day.value;
	data.hour = field_hour.value;

	// check for all required fields
	if( data.project_id && data.day && data.hour ) {
		// setup data as JSON text
		var data_json = JSON.stringify(data);

		// send data
		var url = "action.php?task=add_schedule_item&data=" + data_json + "&rand=" + Math.random();
		ajaxLoad(url, function() {
			if( ajax.readyState==4 && ajax.status==200 ) {
				var response_json = ajax.responseText;
				var response_obj = JSON.parse(response_json);

				if( response_obj.status == "success" ) {
					// on success, add new block
					var block = document.createElement( "div" );
					block.setAttribute("class", "block project_id_" + data.project_id + " type_" + data.project_type + " over");
					block.style.bottom = ((data.hour-8) * 32) + "px";

					this_col.appendChild(block);
				}
			}
		});
	}
}


// *** UTILITIES ***
Element.prototype.hasClass = function (className) {
	return new RegExp(' ' + className + ' ').test(' ' + this.className + ' ');
};
Element.prototype.addClass = function (className) {
	if (!this.hasClass(className)) {
		this.className += ' ' + className;
	}
};
Element.prototype.removeClass = function (className) {
	var newClass = ' ' + this.className.replace(/[\t\r\n]/g, ' ') + ' '
	if (this.hasClass(className)) {
		while (newClass.indexOf( ' ' + className + ' ') >= 0) {
			newClass = newClass.replace(' ' + className + ' ', ' ');
		}
		this.className = newClass.replace(/^\s+|\s+$/g, ' ');
	}
};
Element.prototype.toggleClass = function (className) {
	var newClass = ' ' + this.className.replace(/[\t\r\n]/g, " ") + ' ';
	if (this.hasClass(className)) {
		while (newClass.indexOf(" " + className + " ") >= 0) {
			newClass = newClass.replace(" " + className + " ", " ");
		}
		this.className = newClass.replace(/^\s+|\s+$/g, ' ');
	} else {
		this.className += ' ' + className;
	}
};

function getOffset(el) {
	var top = 0;
	var left = 0;

	while( el.tagName != "BODY" ) {
		top += el.offsetTop;
		left += el.offsetLeft;

		el = el.offsetParent;
	}

	return { top: top, left: left };
}

function getAllElementsWithAttribute(attribute) {
	var matchingElements = [];
	var allElements = document.getElementsByTagName("*");

	for( var i = 0; i < allElements.length; i++ ) {
		if( allElements[i].getAttribute(attribute) ) {
			// Element exists with attribute. Add to array.
			matchingElements.push(allElements[i]);
		}
	}

	return matchingElements;
}

function ajaxLoad(url, cfunc) {
	ajax = new XMLHttpRequest();
	ajax.onreadystatechange = cfunc;
	ajax.open("GET", url, true);
	ajax.send();
}