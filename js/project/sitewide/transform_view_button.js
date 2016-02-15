var anchor = $('#view_more_button');

[].forEach.call(anchor, function(anchor){
      anchor.onclick = function (event) {
        event.preventDefault();
        if (!this.classList.contains('close')) {
          this.classList.add('close');
          $('#left-bar').addClass('expanded'); 
          if (!$("#box-container").hasClass("move-left")) {
              $("body").css("margin-left", "200px");
              $("body").css("margin-right", "-200px");
              $("#leftMobileMenu").addClass("move-left");
              $("#body-mask").addClass("show");
              $("#box-container").addClass("move-left");


              /*
              $("#box-container").addClass("move-left");
              $(".whats_on").addClass("move-left");
              $("#body-mask").fadeIn("slow");

              $("#body-mask").addClass("move-left"); 
              $("#left-bar").addClass("extra-padding-left");*/

              //Move template body
              //$(".transit").addClass("move-left-in-lg")

          }
              //As main body are squashed, need to hide some space
              $('#main_nav').removeClass('visible-lg');
              $('#main_nav').addClass('hidden');
              $('#logo').addClass('hidden');
        }
        else {

          //Close more nav
          this.classList.remove('close');
          $("#left-bar").removeClass('expanded');  
          if ($("#box-container").hasClass("move-left")) {

              $("body").css("margin-left", "0");
              $("body").css("margin-right", "0");
              $("#leftMobileMenu").removeClass("move-left");
              $("#body-mask").removeClass("show");
              $("#box-container").removeClass("move-left");
            /*
            $("#box-container").removeClass("move-left");
            $(".whats_on").removeClass("move-left");
            $("#body-mask").removeClass("move-left");
            $("#body-mask").fadeOut();

            $("#left-bar").removeClass("extra-padding-left");


            $(".transit").removeClass("move-left-in-lg");
            */
          } 
          
          //As main body are squashed, need to hide some space
          $('#main_nav').removeClass('hidden');
          $('#main_nav').addClass('visible-lg');
          $('#logo').removeClass('hidden');

        }
      }
});

anchor = $("#body-mask");
[].forEach.call(anchor, function (anchor) {
    anchor.onclick = function (event) {
        event.preventDefault();
        if (!$('#view_more_button').hasClass("close") && $("#leftMobileMenu").hasClass("move-left")) {
            $('#view_more_button').addClass('close');
            $('#left-bar').addClass('expanded');
            if (!$("#box-container").hasClass("move-left")) {
                $("body").css("margin-left", "200px");
                $("body").css("margin-right", "-200px");
                $("#leftMobileMenu").addClass("move-left");
                $("#body-mask").addClass("show");
                $("#box-container").addClass("move-left");


                /*
                $("#box-container").addClass("move-left");
                $(".whats_on").addClass("move-left");
                $("#body-mask").fadeIn("slow");
  
                $("#body-mask").addClass("move-left"); 
                $("#left-bar").addClass("extra-padding-left");*/

                //Move template body
                //$(".transit").addClass("move-left-in-lg")

            }
            //As main body are squashed, need to hide some space
            $('#main_nav').removeClass('visible-lg');
            $('#main_nav').addClass('hidden');
            $('#logo').addClass('hidden');
        }
        else {
            //Close more nav
            $('#view_more_button').removeClass('close');
            $("#left-bar").removeClass('expanded');
            if ($("#box-container").hasClass("move-left")) {

                $("body").css("margin-left", "0");
                $("body").css("margin-right", "0");
                $("#leftMobileMenu").removeClass("move-left");
                $("#body-mask").removeClass("show");
                $("#box-container").removeClass("move-left");

                //Close mobile nav
            }

            //As main body are squashed, need to hide some space
            $('#main_nav').removeClass('hidden');
            $('#main_nav').addClass('visible-lg');
            $('#logo').removeClass('hidden');
        }
    }
});


$(window).scroll(function () {
    if ($('#view_more_button').hasClass("close")){
        $('#view_more_button').removeClass('close');
        $("#left-bar").removeClass('expanded');
        if ($("#box-container").hasClass("move-left")) {
            $("body").css("margin-left", "0");
            $("body").css("margin-right", "0");
            $("#leftMobileMenu").removeClass("move-left");
            $("#body-mask").removeClass("show");
            $("#box-container").removeClass("move-left");
        }

        //As main body are squashed, need to hide some space
        $('#main_nav').removeClass('hidden');
        $('#main_nav').addClass('visible-lg');
        $('#logo').removeClass('hidden'); 
    }
});

