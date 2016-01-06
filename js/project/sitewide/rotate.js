//For tickets
var hover_element = $('#book-ticket-button');
var rotate = $('#rotate' );

hover_element.hover(function(){
    rotate.addClass('over');
});

hover_element.mouseleave(function(){
    rotate.removeClass('over');
    rotate.addClass('out');
    window.setTimeout( function () { rotate.removeClass('out') }, 800 );
});

var click_element = $('.ticket_tab_rotate_trigger');

click_element.click(function(){
    if($(this).children('.icon-list-alt').first().hasClass('over')){
        $(this).children('.icon-list-alt').first().removeClass('over');
        $(this).children('.icon-list-alt').first().addClass('out');
    }else{
        $(this).children('.icon-list-alt').first().addClass('over');
        $(this).children('.icon-list-alt').first().removeClass('out');
    }
});

