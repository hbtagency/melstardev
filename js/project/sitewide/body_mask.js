var window_height = Math.max($(document).height(), $(window).height());

$(window).load(function(){
    $("#body-mask").height(window_height);
});

