$(function(){

	/* Your dribbble shots */
	Balller.playerShots('daryl', function(response) {
		
		/* lets process the shots */
		$.each($(response.shots), function(k, shot) {
			$('#portfolio ul').append('<li><a href="' + shot.url + '"><img src="' + shot.image_url + '" /></a></li>');
		});
	  
	}, {page: 1, per_page: 21, cache: 600});
	
	
	/* Service hovers */
	$(".service").hover(
		function() {
			$("#networks").addClass($(this).data("network")).addClass("active");
			$("#networks p").html($(this).data("tip"));
		},
		function() {
			$("#networks").removeClass();
			$("#networks p").html("You can find me all over the web");
		}
	);
		
});