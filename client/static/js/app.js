var ballyCyrk = angular.module('ballyCyrk', ['ngRoute', 'ngMessages']);

// ------PARTIAL ROUTES------
ballyCyrk.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: './../static/views/partials/_timer.html',
    controller: 'timerController as TC'
  })
  .when('/leaderboard', {
    templateUrl: './../static/views/partials/_leaderboard.html',
    controller: 'leaderController as LC'
  })
  .when('/admin', {
    templateUrl: './../static/views/partials/_admin.html',
    controller: 'adminController as AC'
  })
  .otherwise({ redirectTo: '/'});
});


