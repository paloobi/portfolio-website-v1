app.config(function($stateProvider, rootDir){
  $stateProvider.state('resume', {
    url: '/resume',
    templateUrl: '/js/resume/resume.html',
    controller: 'Resume'
  })
})