angular.module("myApp").controller("UserController", ["$scope", "$http", "myFactory",
function($scope, $http, myFactory) {
  $scope.edit = false;

  //get request to grab all users in the database
  $scope.getUsers = function() {
    myFactory.getAllUsers()
    .success(function(data) {
      $scope.users = data;
    });
    $scope.edit = false;
  };

  $scope.getUsers();

  $scope.addUser = function() {
    myFactory.postNewUser($scope.newUser)
    .success(function(data) {
      $scope.users = data;
      $scope.getUsers();
      $scope.addForm.$setPristine();
      $scope.newUser = {};
      $('#first').focus();
    });
  };

  //function to delete user whose button was clicked
  $scope.deleteUser = function() {
    var id = this.user._id;
    myFactory.deleteUser(id)
    .success(function(data) {
      $scope.getUsers();
    });
  };

  //function to edit the User
  $scope.editForm = function() {
    $scope.edit = true;
    $scope.newUser = {name: this.user.name};
    $("#first").focus();
    var id = this.user._id;
    $scope.editUser = function() {
      myFactory.editUser(id, $scope.newUser)
      .success(function(data) {
        $scope.getUsers();
      });
    };
  };
}]);
