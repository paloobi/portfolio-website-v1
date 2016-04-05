app.config(function($stateProvider, rootDir){
  $stateProvider.state('resume', {
    url: '/resume',
    templateUrl: rootDir + '/js/resume/resume.html',
    controller: 'Resume'
  })
})