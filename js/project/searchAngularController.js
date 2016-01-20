var searchModule = angular.module('searchModule',['ngAnimate']);
searchModule.controller('searchController', function ($scope, searchService){
    
    function getSearch(){
		searchService.getSearch().success(function(data){
		    $scope.pages = JSON.parse(data);
		})
		.error(function(error){
			console.log(error);
		})

	}


	getSearch();

});

searchModule.factory('searchService', ['$http', function ($http) {

    var searchService = {};
    searchService.getSearch = function () {
        return $http.get('/umbraco/surface/search/getSearch/');
    };
    return searchService;

}]);

