$(".faq_container .accordion-toggle").click(function(){
    if($(this).children("span.icon-list-alt").hasClass("open")){
        $(this).children("span.icon-list-alt").removeClass("open");
        $(this).children("span.icon-list-alt").html("+");
    }else{
        $(this).children("span.icon-list-alt").addClass("open");
        $(this).children("span.icon-list-alt").html("-");
    }
});
