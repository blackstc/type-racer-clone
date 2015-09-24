angular.module("app").controller("RacingController", ["$scope", "racingFactory", function($scope, racingFactory) {
  // $scope.words = [];
  $scope.currentWordIndex = 0;
  $scope.user = {};

  // factory call to grab 20 random words from the NPM
  racingFactory.getWords()
  .success(function(data) {
    $scope.words = data;
  });

  $scope.keyPress = function(e) {
    if (e === 32) {
     if (checkWord($scope.user.input, $scope.words[$scope.currentWordIndex])) {
       correct();
     }
    }
  };

  function correct() {
    $scope.user = {};
    $scope.currentWordIndex++;
    console.log($scope.currentWordIndex);
  }
}]);
