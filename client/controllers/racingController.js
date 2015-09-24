angular.module("app").controller("RacingController", ["$scope", "racingFactory", function($scope, racingFactory) {
  // $scope.words = [];
  $scope.currentWordIndex = 0;

  // factory call to grab 20 random words from the NPM
  racingFactory.getWords()
  .success(function(data) {
    console.log(data);
  });

  if (checkWord($scope.userInput, $scope.words[$scope.currentWordIndex])) {
    $scope.userInput = "";
    $scope.currentWordIndex++;
    
  }
}]);
