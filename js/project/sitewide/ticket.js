$("#book-ticket-button").click(function(){
    if($("#book-ticket-area").hasClass('hidden')){
        $("#book-ticket-area").removeClass('hidden');
    }else{
        $("#book-ticket-area").addClass('hidden');
    }
        
        //$("#book-ticket-area").toggle();
});

$("#close-ticket").click(function(){
    $("#book-ticket-button").click();
});