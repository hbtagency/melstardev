var nav_height = $("#main_navigation").height();
$("#bouncing_arrow").click(function (e) {
    e.preventDefault();    
    $('html, body').animate({
        scrollTop: ($("#featured_home_info").position().top - nav_height)
    }, 1000);
});