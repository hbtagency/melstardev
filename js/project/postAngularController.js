var mainApp = angular.module('mainApp',[]);
mainApp.controller('postController', function ($scope, $location, filterFilter, postService){
    
    
	

	function getPosts(){
		postService.getPosts().success(function(data){
			$scope.posts = JSON.parse(data);
			// console.log(data);
		})
		.error(function(error){
			console.log(error);
		})
	}


	getPosts();
	
	if ($location.path()=="/test") {
		// var filter = $filter('filterB');
		alert("test");
    };
});

mainApp.factory('postService', ['$http', function ($http) {

    var postService = {};
    postService.getPosts = function () {
        return $http.get('/umbraco/surface/Ajax/getAllPosts/');
    };
    return postService;

}]);


// mainApp
// .constant('baseHref', '/en/newsevents/')
// // .value('$sniffer', { history: false })


// // .config(function($locationProvider) {
// //   $locationProvider.html5Mode(true).hashPrefix('!');
// // })

// .controller("LocationController", function($scope, $location) {
//   $scope.$location = {};
//   angular.forEach("protocol host port path search hash".split(" "), function(method){
//     $scope.$location[method] = function(){
//       var result = $location[method].call($location);
//       return angular.isObject(result) ? angular.toJson(result) : result;
//     };
//   });
// });

// // .run(function($rootElement) {
// //   $rootElement.on('click', function(e) {
// //     e.stopPropagation();
// //   });
// // });
