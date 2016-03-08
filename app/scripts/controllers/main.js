'use strict';

/**
 * @ngdoc function
 * @name leadditApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the leadditApp
 */
angular.module('leadditApp')
  .controller('MainCtrl', function ($scope) {
    $scope.posts = [
    {title: 'post 1', upvotes: 1},
  	{title: 'post 2', upvotes: 12},
 	{title: 'post 3', upvotes: 3},
  	{title: 'post 4', upvotes: 4},
  	{title: 'post 5', upvotes: 15}
    ];

    $scope.addPost = function() {
		if(!$scope.title || $scope.link === '') {return; }
    //Make only title required. Link is optional
    	$scope.posts.push({
        title: $scope.title,
        link: $scope.link, 
        upvotes: 0});
    //Push title (required) and link (optional)
    	$scope.title = '';
      $scope.link ='';
    // Reset title and link to blank
    };

    $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
    };

    $scope.decrementUpvotes = function(post) {
    post.upvotes -= 1;
    };

  });
