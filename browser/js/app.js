var app = angular.module('Portfolio', ['ui.router']);

app.config(function($locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
})