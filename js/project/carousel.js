$(window).load(function(){
	var width = window.innerWidth;

	if(width < 812){
		//display only 3 stories
		var count = $('.whatson_content').length;
		$('.whats_on_carousel').unslick;
		for (var i = 3; i < count; i++) {
			$('.whatson_content:nth-child(' + (i+1) + ')').css('display','none');
		};

		var img_height = $('.whatson_carousel_img').height();
		$('.image_wrapper').css('height', img_height);

		$('.whats_new_carousel').slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: false,
                    autoplaySpeed: 2000,
                    focusOnSelect: false,
                    infinite: true,
                    nextArrow: "<a><img class='slick-next-white' style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
                    prevArrow: "<a><img class='slick-prev-white' style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
	  	});
	}
	else if(width < 992){
		$('.whats_new_carousel').slick({
		  slidesToShow: 2,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 2000,
		  focusOnSelect: false,
		  infinite: true,
		  nextArrow: "<a><img class='slick-next-white' style='display:inline-block; right:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_right_white.png' /></a>",
	  	  prevArrow: "<a><img class='slick-prev-white' style='display:inline-block; left:-25px; position:absolute; top:50%;' src='plugins/slick/carousel_left_white.png' /></a>",
	  	});

	  	$('.whats_on_carousel').slick({
			  slidesToShow: 2,
			  slidesToScroll: 1,
			  autoplay: false,
			  autoplaySpeed: 2000,
			  focusOnSelect: false,
			  infinite: true,
	  	});
	}
	
	else {
	  	$('.whats_on_carousel').slick({
		  slidesToShow: 3,
		  slidesToScroll: 1,
		  autoplay: false,
		  autoplaySpeed: 2000,
		  focusOnSelect: false,
		  infinite: true,
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
	  	});
	}

});

