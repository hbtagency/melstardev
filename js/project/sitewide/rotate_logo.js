var hover_element2 = $('#rotate_logo_trigger');
var rotate2 = $('#rotate_logo');
var lock = false;



hover_element2.hover(function(){
    if(!rotate2.hasClass('over')){
        rotate2.addClass('over');
    }

});  

hover_element2.mouseleave(function(){
    if(!lock){
        lock = true;
        window.setTimeout( function () { 
            rotate2.removeClass('over');
            lock = false;
        }, 19000 );
    }
}); 