'use strict';

/**
 * @ngdoc overview
 * @name leadditApp
 * @description
 * # leadditApp
 *
 * Main module of the application.
 */
angular
  .module('leadditApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/my/api/', {
        templateUrl: 'views/myapi.html',
        controller: 'MyapiCtrl',
        controllerAs: 'myApi'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
