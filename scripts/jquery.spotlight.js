$.fn.flashlight = function(width, darkness) {

	// put lightswitch on the page
	var lightSwitch = $('<div><div class="toggle off">').addClass('lightSwitch');
	var spotLight = $('<div>').addClass('spotLight');
	var monster = $('<div>').addClass('monster');
	var holder = $('<div>').addClass('holder').append(monster);

	$('body').append(holder, spotLight, lightSwitch);

	var shadow = 'rgba(0,0,0,' + darkness + ')';
	$('.show').css({ boxShadow: '0 0 0 20px ' + shadow});
		console.log(shadow);

	// toggle .spotlight with .lightSwitch
	$(lightSwitch).on('click', function(event) {
		event.preventDefault();
		// console.log(event);

	// when lightswtich 'on' add an overlay div "spotlight"	
	// when lightswitch 'off' remove overlay div
		$('.spotLight').toggleClass('show').width(width).height(width);
		$('.lightSwitch').toggleClass('turntOff');
		$('.toggle').toggleClass('on');
		$('.monster').toggleClass('gremlinStep');
		$('.show').css({ boxShadow: '0 0 0 20px ' + shadow});

		if ( $('.lightSwitch').hasClass('turntOff')===true ) {
			$('.show').css({ boxShadow: '0 0 0 20000px ' + shadow});
		}
		else {
			$('.spotLight').css({ boxShadow: '0 0 0 0 transparent'});
		}

		var setWidth = $('.show').width();
		var offset = setWidth/2;

		$(window).on('mousemove', function(event) {
			// grab the coordinates of the mouse
				var mouseX = event.pageX;
				var mouseY = event.pageY;

				// console.log(mouseX, mouseY);

			// set the coordinates of .spotLight to be the same as the mouse (plus the height/width offset)
				$('.show').css({ 
					 top: mouseY, 
					 left: mouseX, 
					 transform: 'translate(-'+ offset + 'px , -' + offset + 'px)'});
		
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

	} // end lightSwitch click

)}; // end spotLight fn()