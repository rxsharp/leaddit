'use strict';

/**
 * @ngdoc function
 * @name leadditApp.controller:MyapiCtrl
 * @description
 * # MyapiCtrl
 * Controller of the leadditApp
 */
angular.module('leadditApp')
  .controller('MyapiCtrl', function ($scope, $http) {
    $http.get('http://rxsharp.github.io/my-APIs/shorthandColors.json').success(function(theapi) {
    $scope.myapi = theapi.results;
    });
  });
