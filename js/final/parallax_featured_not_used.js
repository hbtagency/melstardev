function moveBackground(a){parralaxHero.css("background-position-x",a+"px")}function zoom(a,o,r){$({deg:o}).animate({deg:r},{duration:500,step:function(o){a.css({"background-size":o+"% auto"})}},function(){animation_completed=!0})}var parralaxHero=$("#parralax-hero");$(document).ready(function(){var a=20,o=a/$(window).width(),r=!0,e=!1;$("#featured_area").mousemove(function(a){var n=a.pageX-$(window).width()/2,t=o*n*-2-20;r?(zoom(parralaxHero,100,105),r=!1):e&&parralaxHero.css("background-size","110% auto"),moveBackground(t)}),$("#featured_area").mouseleave(function(a){r=!0,zoom(parralaxHero,105,100),e=!1,parralaxHero.css("background-position","center bottom")})});