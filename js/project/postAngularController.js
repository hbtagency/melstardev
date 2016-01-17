var mainApp = angular.module('mainApp',[]);
mainApp.controller('postController',function ($scope, $location, postService){
    
    // alert($location.path());

	getPosts();

	function getPosts(){
		postService.getPosts().success(function(data){
			$scope.posts = JSON.parse(data);
			// console.log(data);
		})
		.error(function(error){
			console.log(error);
		})
	}
});

mainApp.factory('postService', ['$http', function ($http) {

    var postService = {};
    postService.getPosts = function () {
        return $http.get('/umbraco/surface/Ajax/getAllPosts/');
    };
    return postService;

}]);

