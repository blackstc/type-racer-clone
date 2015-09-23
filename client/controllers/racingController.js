angular.module("app").controller("RacingController", ["$scope", "$http",  function($scope, $http) {
  // $scope.words = [];

  //factory call to grab 20 random words from the NPM
  // racingFactory.getWords()
  // .success(function(data) {
  //   console.log(data);
  // });
  $http.get("/api/v1/words")
  .success(function(data) {
    $scope.words = data;
  });
}]);
