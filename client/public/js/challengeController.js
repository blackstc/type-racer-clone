angular.module("myApp").controller("ChallengeController", ["$scope", "$http", "$routeParams",
function($scope, $http, $routeParams) {
  var id = $routeParams.userID;
  $scope.start = true;
  var quizWords = [];

  $scope.createQuiz = function() {
    getRandomWords();
    $scope.start = false;
  };

  //gets 20 random words to be used in the quiz
  getRandomWords = function() {
    $http.get('/api/v1/challenge/' + id)
    .success(function(data) {
      $scope.words = data;
    });
  };

  $scope.translate = function() {
     $http.post("/api/v1/practice/" + id, $scope.newWord)
     .success(function(data) {
       $scope.word = data;
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
}]);
