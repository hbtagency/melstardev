var anchor = $('#view_more_button');
    
[].forEach.call(anchor, function(anchor){
      var open = false;
      anchor.onclick = function(event){
        event.preventDefault();
        if(!open){
          this.classList.add('close');
          $('#left-bar').addClass('expanded');
          //$('#box-container').addClass('right-side');
          if(!$("#box-container").hasClass("move-left")){
                $("#box-container").addClass("move-left");
                $(".whats_on").css("margin-left","400px");
                $("#left-bar").addClass("extra-padding-left");
                
                //$("#body-mask").addClass("show");
                //$("#body-mask").addClass("extra-margin-left");
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
          //$('#box-container').removeClass('right-side');
          if($("#box-container").hasClass("move-left")){
            $("#box-container").removeClass("move-left");
            $(".whats_on").css("margin-left","0");
            $("#left-bar").removeClass("extra-padding-left");
            //$("#body-mask").removeClass("show");
            //$("#body-mask").removeClass("extra-margin-left");
          }
          
          
          //As main body are squashed, need to hide some space
          $('#main_nav').removeClass('hidden');
          $('#main_nav').addClass('visible-lg');
          $('#logo').removeClass('hidden');

          open = false;
        }
        
        
        
        
        
        
      }
}); 