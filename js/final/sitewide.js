var window_height=Math.max($(document).height(),$(window).height());$(window).load(function(){$("#body-mask").height(window_height)});
var window_height=Math.max($(document).height(),$(window).height());$(window).load(function(){$("#leftMobileMenu").height(window_height)}),$("#nav-button").click(function(){$("#box-container").hasClass("move-left")||($("#main_navigation").addClass("when_mobile_menu_open"),$("#leftMobileMenu").addClass("move-left"),$(".whats_on").addClass("move-left"),$("#box-container").addClass("move-left"),$("#body-mask").addClass("show"),$(".container").addClass("move-left"))}),$("#close-mobile").click(function(){$("#box-container").hasClass("move-left")&&($("#main_navigation").removeClass("when_mobile_menu_open"),$("#leftMobileMenu").removeClass("move-left"),$("#box-container").removeClass("move-left"),$(".whats_on").removeClass("move-left"),$("#body-mask").removeClass("show"),$(".container").removeClass("move-left"))});
$(window).scroll(function(){var n=$(this).scrollTop();$(window).width()>1200&&$(".parallax-banner").css("background-position","100% "+parseInt(-n/1)+"px, 0% "+parseInt(-n/2)+"px, center center")});
var hover_element=$("#book-ticket-button"),rotate=$("#rotate");hover_element.hover(function(){rotate.addClass("over")}),hover_element.mouseleave(function(){rotate.removeClass("over"),rotate.addClass("out"),window.setTimeout(function(){rotate.removeClass("out")},800)});var click_element=$(".ticket_tab_rotate_trigger");click_element.click(function(){$(this).children(".icon-list-alt").first().hasClass("over")?($(this).children(".icon-list-alt").first().removeClass("over"),$(this).children(".icon-list-alt").first().addClass("out")):($(this).children(".icon-list-alt").first().addClass("over"),$(this).children(".icon-list-alt").first().removeClass("out"))});
var hover_element2=$("#rotate_logo_trigger"),rotate2=$("#rotate_logo"),lock=!1;hover_element2.hover(function(){rotate2.hasClass("over")||rotate2.addClass("over")}),hover_element2.mouseleave(function(){lock||(lock=!0,window.setTimeout(function(){rotate2.removeClass("over"),lock=!1},19e3))});
$(".search_button").click(function(){$("#search-mask").addClass("show"),$("html").css({overflow:"hidden",height:"100%"}),window.setTimeout(function(){$("#search-input-box").focus()},300)}),$("#mask_close_button").click(function(){$("#search-mask").removeClass("show"),$("html").css({"overflow-y":"scroll",height:"auto"})});
$("form#subscribe-form").submit(function(s){function e(s,e){$.ajax({type:"GET",url:s,data:e.serialize(),cache:!1,dataType:"jsonp",jsonp:"c",contentType:"application/json; charset=utf-8",error:function(s){$("#sign-up-msg").html("Mailchimp Error!")},success:function(s){"success"==s.result&&$("#sign-up-msg").addClass("green"),$("#sign-up-msg").html(s.msg),$("#sign-up-msg").removeClass("hidden")}})}function i(s,e){var i=!0;for(var a in e){var t=document.forms[s][e[a]].value,u=document.forms[s][e[a]];n(t)?"EMAIL"==e[a]&&(r(t)||(d=m.email,i=!1)):(d=m.required,i=!1),""!=d&&($("input[name='"+u.name+"']").siblings(".error-msg").html(d),$("input[name='"+u.name+"']").siblings(".error-msg").removeClass("hidden"))}return i}function n(s){return void 0!=s&&null!=s&&""!=s?!0:!1}function r(s){var e=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e.test(s)}s.preventDefault();var a="mc-embedded-subscribe-form",t=$("#subscribe-form"),u=["FNAME","LNAME","EMAIL"],d="",m={required:"This field is required!",email:"Please enter a valid email!"};if(i(a,u)){var o="http://melbournestar.us11.list-manage.com/subscribe/post-json?u=780de5edae0da9609d83bdfdc&amp;id=df97abedaf";e(o,t)}}),$("#subscribe-form input[type=text]").click(function(){$("#sign-up-msg").hasClass("hidden")||$("#sign-up-msg").addClass("hidden"),$(".error-msg").each(function(){$(this).hasClass("hidden")||$(this).addClass("hidden")})});
var star_point=$(".main_nav").first().offset().top,sticky_element=$(".main_nav").first(),box=$(".box-container").first();$(window).scroll(function(){$(window).scrollTop()>star_point?(sticky_element.addClass("stick"),box.addClass("no-padding"),$("#book-ticket-button").addClass("hidden"),$("#book-ticket-area").hasClass("hidden")||$("#book-ticket-area").addClass("hidden")):(sticky_element.removeClass("stick"),box.removeClass("no-padding"),$("#book-ticket-button").removeClass("hidden"))});
$("#book-ticket-button").click(function(){$("#book-ticket-area").hasClass("hidden")?$("#book-ticket-area").removeClass("hidden"):$("#book-ticket-area").addClass("hidden")}),$("#close-ticket").click(function(){$("#book-ticket-button").click()});
var anchor=$("#view_more_button");[].forEach.call(anchor,function(e){var a=!1;e.onclick=function(e){e.preventDefault(),a?(this.classList.remove("close"),$("#left-bar").removeClass("expanded"),$("#box-container").hasClass("move-left")&&($("#box-container").removeClass("move-left"),$(".whats_on").removeClass("move-left"),$("#body-mask").removeClass("move-left"),$("#body-mask").fadeOut(),$("#left-bar").removeClass("extra-padding-left")),$("#main_nav").removeClass("hidden"),$("#main_nav").addClass("visible-lg"),$("#logo").removeClass("hidden"),a=!1):(this.classList.add("close"),$("#left-bar").addClass("expanded"),$("#box-container").hasClass("move-left")||($("#box-container").addClass("move-left"),$(".whats_on").addClass("move-left"),$("#body-mask").fadeIn("slow"),$("#body-mask").addClass("move-left"),$("#left-bar").addClass("extra-padding-left")),$("#main_nav").removeClass("visible-lg"),$("#main_nav").addClass("hidden"),$("#logo").addClass("hidden"),a=!0)}}),$(window).scroll(function(){$("#view_more_button").hasClass("close")&&($("#view_more_button").removeClass("close"),$("#left-bar").removeClass("expanded"),$("#box-container").hasClass("move-left")&&($("#box-container").removeClass("move-left"),$(".whats_on").removeClass("move-left"),$("#body-mask").removeClass("move-left"),$("#body-mask").fadeOut(),$("#left-bar").removeClass("extra-padding-left")),$("#main_nav").removeClass("hidden"),$("#main_nav").addClass("visible-lg"),$("#logo").removeClass("hidden"))});