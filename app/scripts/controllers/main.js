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
		if(!$scope.title || $scope.title === '') {return; }
    	$scope.posts.push({title: $scope.title, upvotes: 0});
    	$scope.title = '';
    };

    $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
    };

    $scope.decrementUpvotes = function(post) {
    post.upvotes -= 1;
    };

  });
