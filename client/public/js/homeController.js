angular.module("myApp").controller("UserController", ["$scope", "$http",
function($scope, $http) {

  //get request to grab all users in the database
  $scope.getUsers = function() {
    $http.get('/api/v1/users')
    .success(function(data) {
      $scope.users = data;
    });
  };

  $scope.getUsers();

  $scope.addUser = function() {
    $http.post('api/v1/users', $scope.newUser)
    .success(function(data) {
      $scope.users = data;
      $scope.getUsers();
      $scope.addForm.$setPristine();
      $scope.newUser = {};
      $('#first').focus();
    });
  };

  //function to delete hero whose button was clicked
  $scope.deleteUser = function() {
    //get the id of the superhero who was clicked to be deleted
    var id = this.user._id;
    $http.delete('api/v1/user/' + id)
    .success(function(data) {
      $scope.getUsers();
    });
  };

  //function to edit the superhero
  $scope.editUser = function() {
    var id = this.user._id;
    $scope.newUser = {name: this.user.name};
    $("#first").focus();
    $http.delete('api/v1/user/' + id)
    .success(function(data) {
    });
  };
}]);
