var click_element = $('.rotate_trigger');

click_element.click(function(){
    if($(this).children('.rotate').first().hasClass('over')){
        $(this).children('.rotate').first().removeClass('over');
        $(this).children('.rotate').first().addClass('out');
    }else{
        $(this).children('.rotate').first().addClass('over');
        $(this).children('.rotate').first().removeClass('out');
    }
});


