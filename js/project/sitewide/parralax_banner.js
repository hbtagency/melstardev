$(window).scroll(function () {
    var x = $(this).scrollTop();
    if ($(window).width() > 1200) {
        $('.parallax-banner').css('background-position', '100% ' + parseInt(-x / 1) + 'px' + ', 0% ' + parseInt(-x / 2) + 'px, center center');
    }
}); 