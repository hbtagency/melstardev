var searchModule=angular.module("searchModule",["ngAnimate"]);searchModule.controller("searchController",function(e,r){function c(){r.getSearch().success(function(r){e.pages=JSON.parse(r)}).error(function(e){console.log(e)})}c()}),searchModule.factory("searchService",["$http",function(e){var r={};return r.getSearch=function(){return e.get("/umbraco/surface/Search/getSearch/")},r}]);