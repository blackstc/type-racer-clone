var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/home.html",
    controller: "HomeController"
  })
  .when("/racer", {
    templateUrl: "./views/racer.html",
    controller: "RacingController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
