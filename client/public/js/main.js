var myApp = angular.module('myApp', ['ngRoute']);
angular.module('myModule', ['ui.bootstrap']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/home.html',
      controller: 'UserController'
    })
    .when('/:userID', {
      templateUrl: '../views/profile.html',
      controller: 'ProfileController'
    })
    .when('/practice/:userID', {
      templateUrl: '../views/practice.html',
      controller: 'PracticeController'
    })
    .when('/challenge/:userID', {
      templateUrl: '../views/challenge.html',
      controller: 'ChallengeController'
    });
});
