var mainApp=angular.module("mainApp",["ngAnimate"]);mainApp.controller("postController",function(t,e,n){function o(){n.getPosts().success(function(n){t.posts=JSON.parse(n);for(var o=0;o<t.posts.length;o++){var i="/",a=i.concat(t.posts[o].categoryName);a==e.path()&&(t.search.categoryID=t.posts[o].categoryID)}}).error(function(t){console.log(t)})}function i(){var t=window.innerWidth,e=3;t>767&&1200>t&&(e=2);var n,o=0,i=0,a=1;$(".post_list_item").each(function(){$this=$(this);var t=$this.height()+30;t>o&&(n=this,o=t),a%e==0&&($(".post_list_item").slice(i,a).css("min-height",o),i=a,o=0),a++}),768>t&&$(".post_list_item").css("min-height","0")}t.myFunction=function(){$(".three-column-container").show(),$(".post_list_item").each(function(t){var e=$(this);$(this).hide(),setTimeout(function(){e.fadeIn(1e3)},300*t)})},t.search={categoryID:""},t.selectCat=function(e){function n(){i(),setTimeout(n,10)}""==e?(console.log($(".three-column-container").length),$(".three-column-container").hide(),document.querySelector(".three-column-container").style.display="none",setTimeout(function(){$(".three-column-container").show(),$(".post_list_item").each(function(t){var e=$(this);$(this).hide(),setTimeout(function(){e.fadeIn(1e3)},300*t)})},500)):($(".three-column-container").show(),$(".post_list_item").each(function(t){var e=$(this);$(this).hide(),setTimeout(function(){e.fadeIn(1e3)},300*t)})),t.search.categoryID=e,n()},o()}),mainApp.factory("postService",["$http",function(t){var e={};return e.getPosts=function(){return t.get("/umbraco/surface/Ajax/getAllPosts/")},e}]),mainApp.directive("ngRepeatEndWatch",function(){return{restrict:"",scope:{},link:function(t,e,n){if(!n.ngRepeat)throw"ngRepeatEndWatch: `ngRepeat` Directive required to use this Directive";t.$parent.$last&&(""!==n.ngRepeatEndWatch?"function"==typeof t.$parent.$parent[n.ngRepeatEndWatch]?t.$parent.$parent[n.ngRepeatEndWatch]():t.$parent.$parent[n.ngRepeatEndWatch]=!0:t.$parent.$parent.ngRepeatEnd=!0)}}}),angular.element(document).ready(function(){angular.bootstrap(document.getElementById("mainApp"),["mainApp"])});