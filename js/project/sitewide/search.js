$(".search_button").click(function(){
	$("#search-mask").addClass("show");
	$('html').css({
	    'overflow': 'hidden',
	    'height': '100%'
	});
	window.setTimeout(function ()
    {
        $("#search-input-box").focus();
    }, 300);
	
});

$("#mask_close_button").click(function(){
	$("#search-mask").removeClass("show");
	$('html').css({
	    'overflow-y': 'scroll',
	    'height': 'auto'
	});
});
