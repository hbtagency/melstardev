var anchor = $('#view_more_button');
    
[].forEach.call(anchor, function(anchor){
      var open = false;
      anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
          this.classList.add('close');
          $('#left-bar').addClass('expanded'); 
          if(!$("#box-container").hasClass("move-left")){
              $("#box-container").addClass("move-left");
              $(".whats_on").addClass("move-left");
              $("#body-mask").fadeIn("slow");

              $("#body-mask").addClass("move-left"); 
              $("#left-bar").addClass("extra-padding-left");
          }
              //As main body are squashed, need to hide some space
              $('#main_nav').removeClass('visible-lg');
              $('#main_nav').addClass('hidden');
              $('#logo').addClass('hidden');
              open = true;
        }
        else{
          this.classList.remove('close');
          $("#left-bar").removeClass('expanded');  
          if($("#box-container").hasClass("move-left")){
            $("#box-container").removeClass("move-left");
            $(".whats_on").removeClass("move-left");
            $("#body-mask").removeClass("move-left");
            $("#body-mask").fadeOut();

            $("#left-bar").removeClass("extra-padding-left");
          } 
          
          //As main body are squashed, need to hide some space
          $('#main_nav').removeClass('hidden');
          $('#main_nav').addClass('visible-lg');
          $('#logo').removeClass('hidden');

          open = false;
        }
      }
});

$(window).scroll(function () {
    if ($('#view_more_button').hasClass("close")){
        $('#view_more_button').removeClass('close');
        $("#left-bar").removeClass('expanded');
        if ($("#box-container").hasClass("move-left")) {
            $("#box-container").removeClass("move-left");
            $(".whats_on").removeClass("move-left");
            $("#body-mask").removeClass("move-left");
            $("#body-mask").fadeOut();

            $("#left-bar").removeClass("extra-padding-left");
        }

        //As main body are squashed, need to hide some space
        $('#main_nav').removeClass('hidden');
        $('#main_nav').addClass('visible-lg');
        $('#logo').removeClass('hidden');

    }
});

