app.config(function($stateProvider, rootDir){
  $stateProvider.state('skills', {
    url: '/skills',
    templateUrl: rootDir + '/js/skills/skills.html'
  })
})