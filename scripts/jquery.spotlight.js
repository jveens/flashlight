$.fn.spotlight = function(width, darkness) {

	// put lightswitch on the page
	var lightSwitch = $('<div><div class="toggle off">').addClass('lightSwitch');
	var spotLight = $('<div>').addClass('spotLight');
	var monster = $('<div>').addClass('monster');
	var maskBg = $('<span><span class="mask">').addClass('maskBg');

	$('body').append(monster, spotLight, lightSwitch);
	$('.monster').append(maskBg);
	var shadow = 'rgba(0,0,0,' + darkness + ')';
	$('.show').css({ boxShadow: '0 0 20000px' + shadow })
	
		console.log(shadow);
		// $('.shadow').css({ boxShadow: '1px 3px 6px' + shadow })

	// toggle .spotlight with .lightSwitch
	$(lightSwitch).on('click', function(event) {
		event.preventDefault();
		// console.log(event);

	// when lightswtich 'on' add an overlay div "spotlight"	
	// when lightswitch 'off' remove overlay div
		$('.spotLight').toggleClass('show').width(width).height(width);
		$('.lightSwitch').toggleClass('turntOff');
		$('.toggle').toggleClass('on');
		$('.monster').toggleClass('gremlin gremlinMove');





		var setWidth = $('.show').width();
		var offset = setWidth/2;

		$(window).on('mousemove', function(event) {
			// grab the coordinates of the mouse
				var mouseX = event.pageX;
				var mouseY = event.pageY;

				// console.log(mouseX, mouseY);

			// set the coordinates of .spotLight to be the same as the mouse (plus the height/width offset)
				$('.show').css("top", mouseY).css("left", mouseX).css('transform', 'translate(-'+ offset + 'px , -' + offset + 'px)');
		
		}); // end mousemove


		// make gremlin surprised on mouseover 
		$('.monster').on('mouseover', function(){
			$('.monster').addClass('paused');
			});
			// $('.mask').css({ 'display' : 'block' });
		$('.monster').on('mouseout', function(){
			$('.monster').removeClass('paused').addClass('gremlinMove');
			// $('.mask').css({ 'display' : 'absolute' })
		});

	} // end lightSwitch click

)}; // end spotLight fn()