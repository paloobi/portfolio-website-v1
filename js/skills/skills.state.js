app.config(function($stateProvider){
  $stateProvider.state('skills', {
    url: '/skills',
    templateUrl: '/js/skills/skills.html',
    controller: '/js/skills/skills.controller.js'
  })
})