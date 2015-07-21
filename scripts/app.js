'use strict';

var app = angular.module('hl7search', [
    // angular specific dependencies
    'ngRoute',

    // app services
    'hl7search.services',

    // view controllers
    'welcomeCtrl',
    'startCtrl'
  ])

  .config(function($routeProvider) {

    $routeProvider.when('/',
      {
        templateUrl:'views/welcome.html',
        controller:'WelcomeCtrl'
      });

    $routeProvider.when('/start',
      {
        templateUrl:'views/start.html',
        controller:'StartCtrl', 
        resolve: startCtrl.init
      });

    $routeProvider.when('/404',
      {
        templateUrl: '/404.html'
      });

    $routeProvider.otherwise({redirectTo: '/404'});

  });