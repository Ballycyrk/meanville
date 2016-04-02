ballyCyrk.factory('teamFactory', function($http){
   var factory = {};
   var board = []


  factory.show = function(callback){
    $http.get('/leader').success(function(output){
      board = output
      callback(board);
    })
  };

  factory.add = function(team, callback){
    $http.post('/addTeam', team).success(function(output){
      callback(output);
    })
  }

  return factory;
});
