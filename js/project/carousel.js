$(window).load(function(){
	//What's on 
	$('.whats_on_carousel').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		focusOnSelect: false,
		infinite: true,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 1,
				autoplay: false,
				autoplaySpeed: 2000,
				focusOnSelect: false,
			    infinite: true,
			  }
			},
			{
			  breakpoint: 812,
			  settings: "unslick"
			}
		]
  	});


	$('.whats_new_carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        focusOnSelect: false,
        infinite: true,
        nextArrow: "<a><img class='slick-next-white' style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
        prevArrow: "<a><img class='slick-prev-white' style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
        responsive: [
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 2,
		        slidesToScroll: 1,
		        autoplay: false,
		        autoplaySpeed: 2000,
		        focusOnSelect: false,
		        infinite: true,
		        nextArrow: "<a><img class='slick-next-white' style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
		        prevArrow: "<a><img class='slick-prev-white' style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
			  }
			},
			{
			  breakpoint: 812,
			  settings: {
			    slidesToShow: 1,
		        slidesToScroll: 1,
		        autoplay: false,
		        autoplaySpeed: 2000,
		        focusOnSelect: false,
		        infinite: true,
		        nextArrow: "<a><img class='slick-next-white' style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
		        prevArrow: "<a><img class='slick-prev-white' style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
			  }
			}
		]
  	});

	var width = window.innerWidth;
	if(width < 890){
		var img_height = $('.whatson_carousel_img').height();
		$('.image_wrapper').css('height', img_height);
	}
	
});



$(window).resize(function(){
	var width = window.innerWidth;
	if(width < 890){
		var img_height = $('.whatson_carousel_img').height();
		$('.image_wrapper').css('height', img_height);
	}
});

