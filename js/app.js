var app = angular.module('Portfolio', ['ui.router']);

app.config(function($locationProvider){
  $locationProvider.html5Mode(true);
})