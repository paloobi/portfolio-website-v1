app.config(function($stateProvider, rootDir){
  $stateProvider.state('about', {
    url: '/about',
    templateUrl: rootDir + '/js/about/about.html'
  })
})