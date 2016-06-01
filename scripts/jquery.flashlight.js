$.fn.flashlight = function(width, darkness, gremlin) {

	// put lightswitch on the page
	var lightSwitch = $('<div><div class="toggle off">').addClass('lightSwitch');
	var spotLight = $('<div>').addClass('spotLight');
	var monster = $('<div>').addClass('monster monsterHide');
	var holder = $('<div>').addClass('holder').append(monster);

	if (gremlin === true ) {
		$('body').append(holder, spotLight, lightSwitch);
	}
	else {
		$('body').append(spotLight, lightSwitch);
	}

	var shadow = 'rgba(0,0,0,' + darkness + ')';
	$('.show').css({ boxShadow: '0 0 0 20px ' + shadow});

	// toggle .spotlight with .lightSwitch
	$(lightSwitch).on('click', function(event) {
		event.preventDefault();
		// console.log(event);

	// when lightswtich 'on' add an overlay div "spotlight"	
	// when lightswitch 'off' remove overlay div
		$('.spotLight').toggleClass('show').width(width).height(width);
		$('.lightSwitch').toggleClass('turntOff');
		$('.toggle').toggleClass('on');
		$('.monster').toggleClass('gremlinStep monsterHide');
		$('.show').css({ boxShadow: '0 0 0 20px ' + shadow});
		$('.holder').addClass('gremlinSlide');
		// $('.title').toggleID('shine');

		if ( $('.lightSwitch').hasClass('turntOff')) {
			$('.show').css({ boxShadow: '0 0 0 20000px ' + shadow});
			$('.holder').addClass('gremlinSlide');
		}
		else {
			$('.spotLight').css({ boxShadow: '0 0 0 0 transparent'});
		}

		// Set mouse offset
		var offset = width/2;

		$(window).on('mousemove', function(event) {
			// grab the coordinates of the mouse
			var mouseX = event.pageX;
			var mouseY = event.pageY;

			// set the coordinates of .spotLight to be the same as the mouse (plus the height/width offset)
			$('.show').css({ 
				top: mouseY, 
				left: mouseX, 
				transform: 'translate(-'+ offset + 'px , -' + offset + 'px)'
			});
		
		}); // end mousemove

		$('.holder').addClass('gremlinSlide');

		// make gremlin surprised on mouseover 
		$('.monster').on('mouseover', function(){
			$('.holder').addClass('paused');
			$('.monster').removeClass('gremlinStep').addClass('gremlinSurprise');
			});
		$('.monster').on('mouseout', function(){
			$('.holder').removeClass('paused');
			$('.monster').removeClass('gremlinSurprise').addClass('gremlinStep');
		});

	}); // end lightSwitch click

}; // end spotLight fn()