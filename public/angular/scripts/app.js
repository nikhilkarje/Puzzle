'use strict';

angular.module('myangApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/main', {
        templateUrl: 'views/main.haml',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
