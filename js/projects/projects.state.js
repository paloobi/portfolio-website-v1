app.config(function($stateProvider, rootDir){
  $stateProvider.state('projects', {
    url: '/projects',
    templateUrl: '/js/projects/projects.html',
    controller: 'Projects'
  })
})