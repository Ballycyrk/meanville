var ballyCyrk = angular.module('ballyCyrk', ['ngRoute', 'ngMessages']);

// ------PARTIAL ROUTES------
ballyCyrk.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './../static/views/partials/_timer.html',
    controller: 'timerController as TC'
  })
  .when('/dash', {
    templateUrl: './../static/views/partials/_dash.html',
    controller: 'dashController as DC'
  })
  // .when('/user/:id', {
  //   templateUrl: './../static/views/partials/_target.html',
  //   controller: 'targetController as TC'
  // })
  .otherwise({ redirectTo: '/'});
});


