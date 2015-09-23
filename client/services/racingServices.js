app.factory("racingFactory", ["$http", function($http) {
  var object = {};

  obj.getWords = function() {
    return $http.get("/api/v1/words");
  };
}]);
