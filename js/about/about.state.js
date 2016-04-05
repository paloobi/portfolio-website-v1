app.config(function($stateProvider, rootDir){
  $stateProvider.state('about', {
    url: '/',
    templateUrl: rootDir + '/js/about/about.html'
  })
})