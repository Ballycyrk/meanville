ballyCyrk.factory('timerFactory', function($http){
   var factory = {};
   var second


  factory.show = function(callback){
    $http.get('/timer').success(function(output){
      second = output
      callback(second);
    })
  };

  factory.timer = function(callback){
    second--;
    callback(second);
  };

  return factory;
});


