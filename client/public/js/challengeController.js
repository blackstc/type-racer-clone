angular.module("myApp").controller("ChallengeController", ["$scope", "$http", "$routeParams",
function($scope, $http, $routeParams) {
  var id = $routeParams.userID;
  $scope.start = true;
  var quizWords = [];
  $scope.translatedWords = [];
  $scope.questionNumber = 0;

  $scope.createQuiz = function() {
    $scope.start = false;
    for (var i = 0; i < quizWords.length; i++) {
      $scope.translate(quizWords[i]);
    }
  };

  //gets 20 random words to be used in the quiz
  getRandomWords = function() {
    $http.get('/api/v1/challenge/' + id)
    .success(function(data) {
      quizWords = data;
    });
  };

  $scope.translate = function(word) {
    payload = {
      start: $scope.newWord.start,
      end: $scope.newWord.end,
      word: word
    };

    $http.post("/api/v1/practice/" + id, payload)
    .success(function(data) {
      $scope.translatedWords.push(data);
    });
  };

  $scope.checkAnswer = function() {
    console.log($scope.userInput);
    // console.log(checkWord($scope.userInput.answer, quizWords[$scope.questionNumber]));
  };
  //get request to grab all users in the database
  $scope.getUser = function() {
    $http.get('/api/v1/user/' + id)
    .success(function(data) {
      $scope.user = data;
    });
  };

  $scope.getUser();
  getRandomWords();

}]);
