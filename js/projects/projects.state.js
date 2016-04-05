app.config(function($stateProvider, rootDir){
  $stateProvider.state('projects', {
    url: '/projects',
    templateUrl: rootDir + '/js/projects/projects.html',
    controller: 'Projects'
  })
})