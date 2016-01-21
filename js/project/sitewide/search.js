$(".search_button").click(function(){
	$("#search-mask").addClass("show");
	$("#search-mask").fadeIn(1500);
});

$("#mask_close_button").click(function(){
	$("#search-mask").removeClass("show");
});
