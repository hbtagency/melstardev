$(window).scroll(function () {
    var x = $(this).scrollTop();
    if ($(window).width() > 1200) {
        $('.horrizontal-parallax-banner').css('background-position', parseInt(-x / 10) + 'px 20%, '+ parseInt(-x / 20) + 'px 0% ');
    }
});

$(window).load(function () {
    var x = $(this).scrollTop();
    if ($(window).width() > 1200) {
        $('.horrizontal-parallax-banner').css('background-position', parseInt(-x / 10) + 'px 20%, '+ parseInt(-x / 20) + 'px 0% ');
    }
});

