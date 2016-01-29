$(window).scroll(function(){
	var currentHeight = $(window).scrollTop();
        var sticky_point = $(".banner_area").first().height() - $(".main_nav").first().height();
	if(currentHeight > sticky_point){
		$('.sticky_menu_2').addClass('stickyMenu');
		// alert("added");
	}
	else{
		$('.sticky_menu_2').removeClass('stickyMenu');
	}
	// console.log(currentHeight);
})