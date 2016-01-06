//For main nav
var star_point = $('.main_nav').first().offset().top;
var sticky_element = $('.main_nav').first();
var box = $('.box-container').first();
$(window).scroll(function(){
    if($(window).scrollTop() > star_point){
        sticky_element.addClass('stick');
        box.addClass("no-padding");
        //$("#navplacehoder").removeClass("hidden");
        $("#book-ticket-button").addClass("hidden");
        if(!$("#book-ticket-area").hasClass("hidden")){
            $("#book-ticket-area").addClass("hidden");
        }
        //$(".mask").addClass("hidden");
    }else{
        sticky_element.removeClass('stick');
        box.removeClass("no-padding");
        $("#book-ticket-button").removeClass("hidden");
                //$("#navplacehoder").addClass("hidden");
        //$(".mask").removeClass("hidden");

    }
});


