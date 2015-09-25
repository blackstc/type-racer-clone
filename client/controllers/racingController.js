angular.module("app").controller("RacingController", ["$scope", "racingFactory", function($scope, racingFactory) {
  // $scope.words = [];
  $scope.currentWordIndex = 0;
  $scope.user = {};
  $scope.correctWords = [];
  $scope.incorrectWords = [];

  // factory call to grab 20 random words from the NPM
  racingFactory.getWords()
  .success(function(data) {
    $scope.words = data;
  });

  $scope.keyPress = function(e) {
    if (e === 32) {
      if (checkWord($scope.user.input, $scope.words[$scope.currentWordIndex])) {
        correct();
      } else {
        incorrect();
      }
    }
  };

  $scope.checkWord = function(userWord, word) {
    if (userWord === word) {
      return true;
    } else {
      return false;
    }
  };

  $scope.checkCharacter = function(userInput, word) {
    if (userInput !== undefined) {

      var userArr = userInput.split("");
      var wordArr = word.split("");

      for (var i = 0; i < userArr.length; i++) {
        if (userArr[i] !== wordArr[i]) {
          return true;
        }
      }
    }
  };

  function correct() {
    $scope.user = {};
    $scope.correctWords.push($scope.currentWordIndex);
    $scope.currentWordIndex++;

    console.log($scope.currentWordIndex);
  }

  function incorrect() {
    $scope.user = {};
    $scope.incorrectWords.push($scope.currentWordIndex);
    console.log($scope.incorrectWords);
    $scope.currentWordIndex++;
  }


}]);
