var width = window.innerWidth;

if(width < 992){
	//Add overlay for whatsnew
	$('.whatsnew_carousel_textarea').addClass('centered');

	//Update what's new overlay height
	var img_height = $('.whatsnew_carousel_img').height() + 1;
	var img_width = $('.whatsnew_carousel_img').width() + 1;
}
else{
	// Whats_On
	$(".whatson_content").hover(function(){

		if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){
		}else{
			var currentWidth = window.innerWidth;
			if(currentWidth > 992){
				$(this).children('.whatson_carousel_textarea').first().addClass('centered');
			}
		}
	});

	$(".whatson_content").mouseleave(function(){
		if(width > 992){
			if($(this).children('.whatson_carousel_textarea').first().hasClass('centered')){	
				$(this).children('.whatson_carousel_textarea').first().removeClass('centered');
			}else{
			}
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
				var currentWidth = window.innerWidth;
				if(currentWidth > 992){
					$(this).children('.whatsnew_carousel_textarea').first().removeClass('centered');
				}
			}else{
			}
	});
}


$('.whatsnew_carousel_img').on('load', function(){
	auto_adjust_overlay();
});

var doit;
window.onresize = function() {
    clearTimeout(doit);
    doit = setTimeout(function() {

    	console.log("onsize");
        auto_adjust_overlay();
    }, 100);
};

// $(window).resize(function(){
	
// });

function auto_adjust_overlay(){
	//Adjust overlay width and height for auto layout screen
		var width = window.innerWidth;

		if(width <= 556){
			console.log("did");
			var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
			var img_height = $('.whatsnew_carousel_img').height();
			var img_width = $('.whatsnew_carousel_img').width();

			if(isSafari){
				// alert("Safari");
				$('.whatsnew_hover_content').css('height',img_height);
			}
			else{
				// alert("Chrome");
				$('.whatsnew_hover_content').css('height',img_height);
				$('.whatsnew_hover_content').css('width',img_width);
			}
		}
		else if(width <= 992){
			$('.whatsnew_carousel_textarea').addClass('centered');
		}
		else{

		}

	
}


