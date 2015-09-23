app.factory("racingFactory", ["$http", function($http) {
  var object = {};

  object.getWords = function() {
    return $http.get("/api/v1/words");
  };
}]);
