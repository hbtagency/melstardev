var parralaxHero = $('#parralax-hero');

$(document).ready(function() {
    var movementStrength = 20;
    //var height = movementStrength / $(window).height();
    var width = movementStrength / $(window).width();
    var first_hit = true;
    var animation_completed = false;

        $("#featured_area").mousemove(function(e){

            var pageX = e.pageX - ($(window).width() / 2);
            //var pageY = e.pageY - ($(window).height() / 2);
            var newvalueX = width * pageX * -2 -20;
            //var newvalueY = height * pageY * -1 - 50;
            //$(this).css("background-size","110% auto");
            if(first_hit){
                zoom(parralaxHero,100,105);
                first_hit = false;
            }else{
                if(animation_completed){
                    parralaxHero.css("background-size","110% auto");
                }
            }
            moveBackground(newvalueX);
            //$('#featured_area').css("background-position-y", newvalueY+"px");
    });
    $("#featured_area").mouseleave(function(e){
        first_hit = true;
        zoom(parralaxHero,105,100);
        animation_completed = false;
        parralaxHero.css("background-position","center bottom");
    });
    
});


function moveBackground(distance){
    parralaxHero.css("background-position-x", distance+"px");
}

function zoom(container,from,to){
    $({deg: from}).animate({deg: (to)}, {
            duration: 500,
            step: function(now){
                container.css({
                     "background-size": now+"% auto"
                });
            }
        },function(){animation_completed = true;});
}


 /*
function moveBackground(current_position,new_position,container){
   
        $({deg: current_position}).animate({deg: (new_position)}, {
            duration: 3500,
            step: function(now){
                container.css({
                     "background-position-x": "+"+now+"px"
                });
            }
        });
   
} */