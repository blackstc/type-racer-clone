myApp.factory('myFactory', ['$http', function($http){
  var obj = {};

  //function to get ALL users form mongodb
  obj.getAllUsers = function() {
    return $http.get('/api/v1/users');
  };

  //function to POST new users form mongodb
  obj.postNewUser = function(newUser) {
    return $http.post('/api/v1/users', newUser);
  };

  //function to DELETE users form mongodb
  obj.deleteUser = function(id) {
    return $http.delete('/api/v1/user/' + id);
  };

  //function to get ALL users form mongodb
  obj.editUser = function(id, newInfo) {
    return $http.put('/api/v1/user/' + id, newInfo);
  };
  return obj;
}]);
