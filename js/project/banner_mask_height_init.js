
$(document).ready(function(){
    if($(window).width() < 1200){
        var container_height = $(".box-center-container").height();
    }
});


$(window).resize(function(){
    if($(window).width() < 1200){ 
        var container_height = $(".box-center-container").height();
    }
});