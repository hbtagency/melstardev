var width = window.innerWidth;

if(width < 992){
	//Add overlay for whatsnew
	$('.whatsnew_carousel_textarea').addClass('centered');

	//Update what's new overlay height
	var img_height = $('.whatsnew_carousel_img').height() + 1;
	var img_width = $('.whatsnew_carousel_img').width() + 1;
        if(isSafari){
            if(width > 420){
            $('.whatsnew_hover_content').css('height',$(".whats_news_image_wrapper img.img-responsive").first().height()+30);
            }else{
                $('.whatsnew_hover_content').css('height',$(".whats_news_image_wrapper img.img-responsive").first().height());
            }

        }else{
            $('.whatsnew_hover_content').css('height',img_height);

        }
  
	$('.whatsnew_hover_content').css('width',img_width);
	$('.whatsnew_content').css('height',img_height+30);
	
}
else{
	// Whats_On
	$(".whatson_content").hover(function(){

		if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){
		}else{
			$(this).children('.whatson_carousel_textarea').first().addClass('centered');
		}
	});

	$(".whatson_content").mouseleave(function(){
		if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){
			$(this).children('.whatson_carousel_textarea').first().removeClass('centered');
		}else{
		}
	});

	// Whats New
	$(".whatsnew_content").hover(function(){

		if($(this).children('.whatsnew_carousel_textarea').first().hasClass('centered')){
		}else{
			$(this).children('.whatsnew_carousel_textarea').first().addClass('centered');
		}
	});

	$(".whatsnew_content").mouseleave(function(){
		if($(this).children('.whatsnew_carousel_textarea').first().hasClass('centered')){
			$(this).children('.whatsnew_carousel_textarea').first().removeClass('centered');
		}else{
		}
	});
}