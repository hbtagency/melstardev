$(".search_button").click(function(){
	$("#search-mask").addClass("show");
	$('html').css({
	    'overflow': 'hidden',
	    'height': '100%'
	});
	$("#search-mask").fadeIn(1500);
});

$("#mask_close_button").click(function(){
	$("#search-mask").removeClass("show");
	$('html').css({
	    'overflow-y': 'scroll',
	    'height': 'auto'
	});
});
