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

  // $scope.addUser = function() {
  //   $http.post('api/v1/users', $scope.newUser)
  //   .success(function(data) {
  //     $scope.users = data;
  //     $scope.getUsers();
  //     $scope.addForm.$setPristine();
  //     $scope.newUser = {};
  //     $('#first').focus();
  //   });
  // };
  //
  // //function to delete hero whose button was clicked
  // $scope.deleteUser = function() {
  //   //get the id of the superhero who was clicked to be deleted
  //   var id = this.user._id;
  //   $http.delete('api/v1/user/' + id)
  //   .success(function(data) {
  //     $scope.getUsers();
  //   });
  // };
  //
  // //function to edit the superhero
  // $scope.editUser = function() {
  //   var id = this.user._id;
  //
  //   //when edit button is clicked, add the data of the superhero to the input fields and delete the superhero from the database, because when the user clicks save, the new superhero will be added back with edited details
  //   $scope.newUser.name = this.user.name;
  //   $("#first").focus();
  //   $http.delete('api/v1/user/' + id)
  //   .success(function(data) {
  //   });
  // };
}]);
