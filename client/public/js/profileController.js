angular.module("myApp").controller("ProfileController", ["$scope", "$http", "$routeParams",
function($scope, $http, $routeParams) {

  //get request to grab all users in the database
  $scope.getUser = function() {
    var id = $routeParams.userID;
    $http.get('/api/v1/user/' + id)
    .success(function(data) {
      $scope.user = data;
    });
  };

  $scope.getUser();
}]);
