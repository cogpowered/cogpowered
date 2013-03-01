$(function(){

	/* Your dribbble shots */
	Balller.playerShots('daryl', function(response) {
		
		/* lets process the magic */
		$.each($(response.shots), function(k, shot) {
			$('#portfolio ul').append('<li><a href="' + shot.url + '"><img src="' + shot.image_url + '" /></a></li>');
		});
	  
	}, {page: 1, per_page: 21, cache: 600});
		
});