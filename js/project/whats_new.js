$(window).load(function(){
    if(isSafari){
        responsiveCarousel();
        initCarouselItem();
    }
});


$(document).ready(function(){
    if(isSafari === false){
        responsiveCarousel();
        initCarouselItem();
    }
});

$(".slick-carousel .item").hover(function(){
    $(this).children(".img-div").addClass("hovered");
    $(this).children(".whatsnew_carousel_textarea").addClass("hovered");
});

$(".slick-carousel .item").mouseleave(function(){
    $(this).children(".img-div").removeClass("hovered");
    $(this).children(".whatsnew_carousel_textarea").removeClass("hovered");

});

function initCarouselItem(){
    if(isSafari){
        var parent_height = $(".whats_new_mask").parent().height();
        $(".whats_new_mask").height(parent_height);
    }else{
        var parent_height = $(".whats_new_mask").first().parent().height();
        $(".whats_new_mask").height(parent_height);
    }  
}

function responsiveCarousel() {
    var window_width = $(window).width();
    if (window_width < 520) {
        $('.autoplay').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    } else if (window_width < 992) {
        $('.autoplay').slick({
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    } else {
        $('.autoplay').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            prevArrow: $('.prev'),
            nextArrow: $('.next'),
        });
    }
}
