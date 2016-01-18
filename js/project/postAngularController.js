var mainApp = angular.module('mainApp',[]);
mainApp.controller('postController', function ($scope, $location, postService){
    
    $scope.search = {
        categoryID: "",
    };
    $scope.selectCat = function (cat) {
        $scope.search.categoryID = cat;
    }

    // $scope.posts = "";
	function getPosts(){
		postService.getPosts().success(function(data){
			$scope.posts = JSON.parse(data);
			// console.log(data);
			
			for (var i = 0; i < $scope.posts.length; i++) {
				var slash = "/";
				var newCategoryPathName = slash.concat($scope.posts[i].categoryName);
				if(newCategoryPathName == $location.path()){
					$scope.search.categoryID = $scope.posts[i].categoryID;
				}
			};
			
		})
		.error(function(error){
			console.log(error);
		})

	}


	getPosts();

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
