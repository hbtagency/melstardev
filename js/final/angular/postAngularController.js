var mainApp=angular.module("mainApp",["ngAnimate"]);mainApp.controller("postController",function(t,e,n){function a(){n.getPosts().success(function(n){t.posts=JSON.parse(n);for(var a=0;a<t.posts.length;a++){var o="/",i=o.concat(t.posts[a].categoryName);i==e.path()&&(t.search.categoryID=t.posts[a].categoryID)}}).error(function(t){console.log(t)})}function o(){var t=window.innerWidth,e=3;t>767&&1200>t&&(e=2);var n,a=0,o=0,i=1;$(".post_list_item").each(function(){$this=$(this);var t=$this.height()+30;t>a&&(n=this,a=t),console.log(t+"->"+a+":"+i),i%e==0&&($(".post_list_item").slice(o,i).css("min-height",a),console.log("!"+e+"("+o+","+i+") Max height:"+a),o=i,a=0),i++}),768>t&&$(".post_list_item").css("min-height","0")}t.myFunction=function(){$(".three-column-container").show(),$(".post_list_item").each(function(t){var e=$(this);$(this).hide(),setTimeout(function(){e.fadeIn(1e3)},300*t)})},t.search={categoryID:""},t.selectCat=function(e){function n(){o(),setTimeout(n,10)}t.search.categoryID=e,n()},a()}),mainApp.factory("postService",["$http",function(t){var e={};return e.getPosts=function(){return t.get("/umbraco/surface/Ajax/getAllPosts/")},e}]),mainApp.directive("ngRepeatEndWatch",function(){return{restrict:"",scope:{},link:function(t,e,n){if(!n.ngRepeat)throw"ngRepeatEndWatch: `ngRepeat` Directive required to use this Directive";t.$parent.$last&&(""!==n.ngRepeatEndWatch?"function"==typeof t.$parent.$parent[n.ngRepeatEndWatch]?t.$parent.$parent[n.ngRepeatEndWatch]():t.$parent.$parent[n.ngRepeatEndWatch]=!0:t.$parent.$parent.ngRepeatEnd=!0)}}}),angular.element(document).ready(function(){angular.bootstrap(document.getElementById("mainApp"),["mainApp"])});