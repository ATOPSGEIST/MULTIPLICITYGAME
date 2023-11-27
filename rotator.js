function theRotator() {
	jQuery('div#rotator ul li').css({opacity: 0});
	
	jQuery('div#rotator ul li:first').css({opacity: 1});
		
	setInterval('rotate()',4000);
	
}

function rotate() {	
	var current = ( jQuery('div#rotator ul li.show') ? jQuery('div#rotator ul li.show') : jQuery('div#rotator ul li:first'));

	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? jQuery('div#rotator ul li:first') :current.next()) : jQuery('div#rotator ul li:first'));	
	
	next.css({opacity: 0})
		.addClass('show')
		.animate({opacity: 1}, 1500);

	current.animate({opacity: 0}, 1500)
		.removeClass('show');
	
};

jQuery(document).ready(function() {		
	//Load the slideshow
	theRotator();
});