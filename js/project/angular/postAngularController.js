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
        start();
        function start() {
            dynamicHeightUpdater();
            setTimeout(start, 10);
        };
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


    function dynamicHeightUpdater(){
        var width = window.innerWidth;
        var numOfEachRow = 3;
        if(width > 767 && width < 1200) numOfEachRow = 2;

        var maxHeight=0; 
        var t_elem; 
        var updated_i = 0;
        var current_i = 1;
        $(".post_list_item").each(function () {
            $this = $(this);
            var currentHeight = $this.height() + 30;
            if ( currentHeight > maxHeight ) {
                t_elem=this;
                maxHeight=currentHeight;
            }
            console.log(currentHeight + "->" + maxHeight + ":" +current_i);
            if(current_i % numOfEachRow == 0){
                //Update min-height for every 2 or 2 elements
                $(".post_list_item").slice(updated_i,current_i).css("min-height",maxHeight);
                console.log("!" + numOfEachRow + "(" + updated_i +"," + current_i + ") Max height:" + maxHeight);
                updated_i = current_i;
                maxHeight = 0;
            } 
            current_i++;
        });

        if(width < 768){
            $(".post_list_item").css("min-height","0");
        }
    }
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

