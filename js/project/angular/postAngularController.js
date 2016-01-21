var mainApp = angular.module('mainApp',['ngAnimate']);
mainApp.controller('postController', function ($scope, $location, postService){
    //This functions will load news items in order after ng-repeat completes
    $scope.myFunction = function () {
        $(".three-column-container").show();
        $('.post_list_item').each(function (i) {
            var el = $(this);
            $(this).hide();
            setTimeout(function () { el.fadeIn(1000); }, i * 300);
        });
    }

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


//Defind ng-repead finish events. 
mainApp.directive('ngRepeatEndWatch', function () {
    return {
        restrict: '',
        scope: {},
        link: function (scope, element, attrs) {
            if (attrs.ngRepeat) {
                if (scope.$parent.$last) {
                    if (attrs.ngRepeatEndWatch !== '') {
                        if (typeof scope.$parent.$parent[attrs.ngRepeatEndWatch] === 'function') {
                            // Executes defined function
                            scope.$parent.$parent[attrs.ngRepeatEndWatch]();
                        } else {
                            // For watcher, if you prefer
                            scope.$parent.$parent[attrs.ngRepeatEndWatch] = true;
                        }
                    } else {
                        // If no value was provided than we will provide one on you controller scope, that you can watch
                        // WARNING: Multiple instances of this directive could yeild unwanted results.
                        scope.$parent.$parent.ngRepeatEnd = true;
                    }
                }
            } else {
                throw 'ngRepeatEndWatch: `ngRepeat` Directive required to use this Directive';
            }
        }
    };
});











angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById('mainApp'), ['mainApp']);
});

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
