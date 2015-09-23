var app = angular.module("app", ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl: "./views/home.html",
    controller: "HomeController"
  })
  .when("/racing", {
    templateUrl: "./views/racing.html",
    controller: "RacingController"
  })
  .otherwise({
    redirectTo: "/"
  });
});
