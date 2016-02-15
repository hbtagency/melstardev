var window_height = Math.max($(document).height(), $(window).height());

$(window).load(function(){
    $("#leftMobileMenu").height(window_height);
});


//Mobile menu
$("#nav-button").click(function(){
    if (!$("#leftMobileMenu").hasClass("move-left")) {
        $("#main_navigation").addClass("when_mobile_menu_open");
        $("body").css("margin-left", "200px");
        $("body").css("margin-right", "-200px");
        $("#leftMobileMenu").addClass("move-left");
        $("#body-mask").addClass("show");
        $("#box-container").addClass("move-left");


        /*
        $("#leftMobileMenu").addClass("move-left");
        $(".whats_on").addClass("move-left");
        $("#box-container").addClass("move-left");
        $("#body-mask").addClass("show");
        $(".container").addClass("move-left")*/
    }
});

$("#close-mobile").click(function(){
    if ($("#leftMobileMenu").hasClass("move-left")) {
        $("#main_navigation").removeClass("when_mobile_menu_open");
        $("body").css("margin-left", "0");
        $("body").css("margin-right", "0");
        $("#leftMobileMenu").removeClass("move-left");
        $("#body-mask").removeClass("show");
        $("#box-container").removeClass("move-left");

        /*
        $("#leftMobileMenu").removeClass("move-left");
        $("#box-container").removeClass("move-left");
        $(".whats_on").removeClass("move-left");
        $("#body-mask").removeClass("show");
        $(".container").removeClass("move-left");*/
        //$(".container").css("margin", "0 auto");
    }
});

$("#body-mask").click(function () {
    if (!$("#leftMobileMenu").hasClass("move-left")) {
        $("#main_navigation").addClass("when_mobile_menu_open");
        $("body").css("margin-left", "200px");
        $("body").css("margin-right", "-200px");
        $("#leftMobileMenu").addClass("move-left");
        $("#body-mask").addClass("show");
        $("#box-container").addClass("move-left");


        /*
        $("#leftMobileMenu").addClass("move-left");
        $(".whats_on").addClass("move-left");
        $("#box-container").addClass("move-left");
        $("#body-mask").addClass("show");
        $(".container").addClass("move-left")*/
    }else{
        $("#main_navigation").removeClass("when_mobile_menu_open");
        $("body").css("margin-left", "0");
        $("body").css("margin-right", "0");
        $("#leftMobileMenu").removeClass("move-left");
        $("#body-mask").removeClass("show");
        $("#box-container").removeClass("move-left");

        /*
        $("#leftMobileMenu").removeClass("move-left");
        $("#box-container").removeClass("move-left");
        $(".whats_on").removeClass("move-left");
        $("#body-mask").removeClass("show");
        $(".container").removeClass("move-left");*/
        //$(".container").css("margin", "0 auto");
    }
});

//refer body_mask.js

