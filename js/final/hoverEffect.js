function auto_adjust_overlay(){var e=window.innerWidth;if(556>=e){console.log("did");var t=Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0,s=$(".whatsnew_carousel_img").height(),a=$(".whatsnew_carousel_img").width();t?$(".whatsnew_hover_content").css("height",s):($(".whatsnew_hover_content").css("height",s),$(".whatsnew_hover_content").css("width",a))}else 992>=e&&$(".whatsnew_carousel_textarea").addClass("centered")}var width=window.innerWidth;if(992>width){$(".whatsnew_carousel_textarea").addClass("centered");var img_height=$(".whatsnew_carousel_img").height()+1,img_width=$(".whatsnew_carousel_img").width()+1}else $(".whatson_content").hover(function(){if($(this).children(".whatson_carousel_textarea").first().hasClass("centered"));else{var e=window.innerWidth;e>992&&$(this).children(".whatson_carousel_textarea").first().addClass("centered")}}),$(".whatson_content").mouseleave(function(){width>992&&$(this).children(".whatson_carousel_textarea").first().hasClass("centered")&&$(this).children(".whatson_carousel_textarea").first().removeClass("centered")}),$(".whatsnew_content").hover(function(){$(this).children(".whatsnew_carousel_textarea").first().hasClass("centered")||$(this).children(".whatsnew_carousel_textarea").first().addClass("centered")}),$(".whatsnew_content").mouseleave(function(){if($(this).children(".whatsnew_carousel_textarea").first().hasClass("centered")){var e=window.innerWidth;e>992&&$(this).children(".whatsnew_carousel_textarea").first().removeClass("centered")}});$(".whatsnew_carousel_img").on("load",function(){auto_adjust_overlay()});var doit;window.onresize=function(){clearTimeout(doit),doit=setTimeout(function(){console.log("onsize"),auto_adjust_overlay()},100)};