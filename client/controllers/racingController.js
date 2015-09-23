angular.module("app").controller("RacingController", ["$scope", "racingFactory", function($scope, racingFactory) {
  $scope.words = [];

  //factory call to grab 20 random words from the NPM
  racingFactory.getWords()
  .success(function(data) {
    console.log(data);
  });
}]);
