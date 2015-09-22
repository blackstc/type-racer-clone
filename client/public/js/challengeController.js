angular.module("myApp").controller("ChallengeController", ["$scope", "$http", "$routeParams",
function($scope, $http, $routeParams) {

  var id = $routeParams.userID;
  $scope.start = true;
  $scope.quizWords = [];
  $scope.translatedWord = [];
  $scope.questionNumber = 0;
  $scope.userInput = {};
  var incorrect = 0;


  $scope.createQuiz = function() {
    $scope.start = false;
    $scope.user.challengesTaken++;
    $scope.translate($scope.quizWords[$scope.questionNumber]);
  };

  //gets 20 random words to be used in the quiz
  getRandomWords = function() {
    $http.get('/api/v1/challenge/' + id)
    .success(function(data) {
      $scope.quizWords = data;
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
      $scope.translatedWord.push(data);
    });
  };

  $scope.checkAnswer = function() {
    if (checkWord($scope.userInput.guess, $scope.quizWords[$scope.questionNumber])) {
      updateCorrect();
      init();
    } else {
      updateIncorrect();
      init();
    }
  };

  updateCorrect = function() {
    $scope.questionNumber++;
    $scope.correct = true;
  };

  updateIncorrect = function() {
    incorrect++;
    $scope.correct = false;
    $scope.questionNumber++;
  };

  init = function() {
    if (incorrect < 5  && $scope.translatedWord.length < 10) {
      $scope.userInput = {};
      $scope.translate($scope.quizWords[$scope.questionNumber]);
    } else if (incorrect === 5) {
      updateLoss();
    } else {
      updateComplete();
    }
  };

  updateLoss = function() {
    $scope.failed = true;
    var challengesTaken = 0;
    var words = 0;
    var challengesPassed = 0;
    var challengesFailed = 0;

    if ($scope.user.words === undefined) {
      challengesTaken = 1;
      challengesFailed = 1;
      words = $scope.translatedWord.length;
    } else {
      challengesTaken = $scope.user.challengesTaken += 1;
      challengesPassed = $scope.user.challengesPassed;
      challengesFailed = $scope.user.challengesFailed += 1;
      words = $scope.user.words += $scope.translatedWord.length;
    }

    var update = {
      challengesTaken: challengesTaken,
      challengesPassed: challengesPassed,
      challengesFailed: challengesFailed,
      words: words
    };

    $http.put('/api/v1/user/' + id, update)
    .success(function(data) {
    });
  };

  updateComplete = function() {
    $scope.complete = true;
    var challengesTaken = 0;
    var words = 0;
    var challengesPassed = 0;
    var challengesFailed = 0;

    if ($scope.user.words === undefined) {
      challengesTaken = 1;
      challengesPassed = 1;
      challengesFailed = 0;
      words = $scope.translatedWord.length;
    } else {
      challengesTaken = $scope.user.challengesTaken += 1;
      challengesPassed = $scope.user.challengesPassed += 1;
      challengesFailed = $scope.user.challengesFailed;
      words = $scope.user.words += $scope.translatedWord.length;
    }

    var update = {
      challengesTaken: challengesTaken,
      challengesPassed: challengesPassed,
      challengesFailed: challengesFailed,
      words: words
    };

    $http.put('/api/v1/user/' + id, update)
    .success(function(data) {
    });
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
