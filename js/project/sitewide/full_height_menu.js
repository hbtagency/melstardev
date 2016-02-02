var window_height = Math.max($(document).height(), $(window).height());

$(window).load(function(){
    $("#leftMobileMenu").height(window_height);
});


//Mobile menu
$("#nav-button").click(function(){
    if(!$("#box-container").hasClass("move-left")){
        $("#main_navigation").addClass("when_mobile_menu_open");
        $("#leftMobileMenu").addClass("move-left");
        $(".whats_on").addClass("move-left");
        $("#box-container").addClass("move-left");
        $("#body-mask").addClass("show");
        $(".container").addClass("move-left")
        //$(".container").css("margin-left", "200px");
    }
});

$("#close-mobile").click(function(){
    if($("#box-container").hasClass("move-left")){
        $("#main_navigation").removeClass("when_mobile_menu_open");
        $("#leftMobileMenu").removeClass("move-left");
        $("#box-container").removeClass("move-left");
        $(".whats_on").removeClass("move-left");
        $("#body-mask").removeClass("show");
        $(".container").removeClass("move-left");
        //$(".container").css("margin", "0 auto");
    }
});

//refer body_mask.js

