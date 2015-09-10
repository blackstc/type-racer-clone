var myApp = angular.module('myApp', ['ngRoute']);
angular.module('myModule', ['ui.bootstrap']);

myApp.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: '../views/api.html',
      controller: 'TranslatorController'
    });
});
