$(function() {
	$('body').flashlight(200, 0.75, true);
	
	var shine = new Shine(document.getElementById('shine'));
	window.addEventListener('mousemove', function(event) {
	  shine.light.position.x = event.clientX;
	  shine.light.position.y = event.clientY;
	  shine.draw();
	}, false);
});