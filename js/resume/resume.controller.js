app.controller('Resume', function($scope, Jobs, Education){
  $scope.jobs = Jobs;
  $scope.education = Education;
})