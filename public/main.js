var app = angular.module('Portfolio', ['ui.router']);

app.config(function($locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');
})
app.config(function($stateProvider){
  $stateProvider.state('about', {
    url: '/',
    templateUrl: '/js/about/about.html'
  })
})
app.controller('Projects', function($scope, ProjectList) {
  $scope.projects = ProjectList;
})
app.filter('displayObject', function() {
  return function(input) {
    return input.filter(function(item) {
      return item.display;
    })
  }
})

app.factory('ProjectList', function() {
  var baseRepo = 'https://github.com/paloobi/';
  return [
      {
        name: 'Symph',
        role: 'Software Engineer, Team of 3',
        date: 'April 2016',
        repo: 'https://github.com/intersim/symph',
        demo: 'https://www.youtube.com/watch?v=2_L9xntd8Tw',
        link: 'http://www.getsymph.io',
        img: 'symph.png',
        features: [
          'Built back­end routes, models and RESTful API for mixes and loops using Node, Express, Mongoose, MongoDB',
          'Wrote RESTful API route tests for mixes and loops using Mocha, Chai & Supertest',
          'Engineered interface for saving music and visual data from front­end Angular app into MongoDB on the back end',
          'Created Track Editor with custom Angular directives that utilize HTML5’s native Drag and Drop API'
        ],
        display: true
      },
      {
        name: 'SuperGender',
        role: 'Software Engineer, Team of Me',
        date: 'March 2016',
        repo: baseRepo + 'genderincomics',
        demo: 'http://www.fullstackacademy.com/hackathon-presentations/super-gender',
        img: 'supergender.png',
        features: [
          'Analyzed data from 100,000+ characters from Comic Vine API to uncover gender trends in comic books',
          'Built responsive SVG charts using Chartist.js for data visualization',
          'Created custom Angular filters that use URL query strings to filter by comic publisher'
        ],
        display: true
      },
      {
        name: 'Tessel MusicBot',
        role: 'Software Engineer, Team of 3',
        date: 'March 2016',
        repo: baseRepo + 'tesselmusicbot',
        img: 'tesselmusicbot.png',
        features: [
          'Built web app that sends a photo taken by Tessel to the Microsoft Emotion API for analysis',
          'Plays an appropriate YouTube video depending on emotion'
        ],
        display: true
      },
      {
        name: 'Guessing Game',
        date: 'Dec 2015',
        repo: baseRepo + 'guessing-game',
        link: 'http://alex.polubiec.com/guessing-game/',
        img: 'guessinggame.png',
        features: [
          'Game - user tries to guess the number',
          'Features include: hints, new game, reset',
          'Static JavaScript, HTML & CSS'
        ],
        display: true
      },
      {
        name: 'Arcade Game Clone',
        date: 'Oct 2015',
        repo: baseRepo + 'frontend-nanodegree-arcade-game',
        link: '',
        features: [
          'Simple arcade game, Frogger clone',
          'Created using object-oriented JavaScript & HTML5 Canvas',
          'Game assets and engine provided by <a href="http://www.udacity.com/">Udacity</a>.'
        ],
        display: false
      },
      {
        name: 'Weather App',
        date: 'Aug 2014',
        repo: baseRepo + 'weatherapp',
        link: 'https://apolubi-weather-app.herokuapp.com/',
        features: [
          'Full-stack web application displays weather forecast using GET requests to an API',
          'Ruby, Sinatra, HTML/CSS, JavaScript, Weatherman Ruby Gem'
        ],
        display: false
      }
    ]
})

app.config(function($stateProvider){
  $stateProvider.state('projects', {
    url: '/projects',
    templateUrl: '/js/projects/projects.html',
    controller: 'Projects'
  })
})
app.controller('Resume', function($scope, Jobs, Education){
  $scope.jobs = Jobs;
  $scope.education = Education;
})
app.factory('Jobs', function() {

  return [
    {
      company: 'Shape Security',
      title: 'Senior Technical Writer',
      specialty: 'Tools, Automation & Information Architecture',
      date: '2015',
      details: [
        'Engineered doc publishing system using Python, Sphinx documentation, LaTeX, and Jinja',
        'Developed Doc Portal with Jira integration',
        'Documented hardware, software, Android & iOS SDKs, and web UI for cutting-edge web security product',
        'Automated documentation for doc publishing system and for engineering teams'
      ]
    },
    {
      company: 'A10 Networks',
      title: 'Senior Technical Writer',
      specialty: 'API & Scripting References',
      date: '2014-2015',
      details: [
        'Built HTML5 online help and integrated with Django web application, in collaboration with GUI engineers',
        'Managed automated RESTful JSON API documentation in collaboration with QA & Automation Engineers',
        'Authored Developer User Guide for RESTful API',
        'Received Engineering Peer Recognition award for contributions to Engineering Department in 2014'
      ]
    },
    {
      company: 'A10 Networks',
      title: 'Technical Writer',
      specialty: 'Scripting Reference & Hardware Guide',
      date: '2013-2014',
      details: [
        'Edited and tested 100s of code examples for TCL-based scripting language used for customized load balancing',
        'Documented network configuration for Load Balancing, DDoS-mitigation & IPv6-migration devices',
        'Authored hardware guides for network industry’s first 100-Gigabit Ethernet Application Delivery Controller'
      ]
    }
  ]

})

app.factory('Education', function() {
  return [
    {
      name: 'Grace Hopper Academy',
      date: 'Jan - Apr 2016',
      focus: 'Software Engineering Program',
      description: 'Full stack, all-women immersive software engineering program focused on web development using the MEAN stack: MongoDB, Express.js, Angular.js, and Node.js.',
      degree: null
    },
    {
      name: 'Introduction to Computer Science and Programming Using Python',
      date: 'Aug - Oct 2014',
      focus: 'Python, algorithms, data structures',
      description: 'Offered by MITx on the EdX platform',
      degree: null
    },
    {
      name: 'Skillcrush',
      date: 'May - Aug 2014',
      focus: 'Web Developer Blueprint',
      description: 'Basic introduction to full-stack web development using HTML/CSS, Ruby/Sinatra and JavaScript/jQuery.',
      degree: null
    },
    {
      name: 'Self Taught',
      date: '2011-2014',
      focus: "Python, JavaScript, HTML & CSS",
      description: "Taught myself how to program, and how to build simple websites, as well as a little bit of web design.",
      degree: null
    },
    {
      name: 'Bennington College',
      date: '2007 - 2011',
      focus: 'Drama & Music',
      description: 'Writing, Performance, History, Dramaturgy. Entirely self-designed program, focused on history and adaptation in music and theatre.',
      degree: 'BA'
    }
  ]
})
app.config(function($stateProvider){
  $stateProvider.state('resume', {
    url: '/resume',
    templateUrl: '/js/resume/resume.html',
    controller: 'Resume'
  })
})
app.controller('Skills', function($scope, SkillList) {
  $scope.skills = SkillList;
  console.log($scope.skills);
})
app.factory('SkillList', function() {

    return [
        {
          name: "Proficient",
          skills: [
            { name: "JavaScript" },
            { name: "Python" },
            { name: "Node" },
            { name: "Express" },
            { name: "RESTful APIs" },
            { name: "MongoDB" },
            { name: "Mongoose" },
            { name: "Angular" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Git/Github" },
            { name: "Network Protocols" },
            { name: "TCP/IP" },
            { name: "Software Documentation" },
            { name: "Server Load Balancers" }
          ]
        },
        {
          name: "Competent",
          skills: [
            { name: "Web Security" },
            { name: "Deployment" },
            { name: "AJAX" },
            { name: "OAuth" },
            { name: "jQuery" },
            { name: "SCSS/SASS" },
            { name: "Mocha" },
            { name: "Chai" },
            { name: "SuperTest" },
            { name: "Test-­Driven Development" },
            { name:  "Agile Software Development" },
            { name: "Jira" },
            { name: "Bugzilla" }
          ]
        },
        {
          name: "Familiar",
          skills: [
            { name: "Ruby" },
            { name: "Sinatra" },
            { name: "Flask" },
            { name: "Django" },
            { name: "SQL" },
            { name: "Tcl" },
            { name: "PHP" },
            { name: "AWS" },
            { name: "JSData" },
            { name: "Gulp" },
            { name: "SVN" },
            { name: "Bamboo" },
          ]
        }
      ]

});
app.config(function($stateProvider){
  $stateProvider.state('skills', {
    url: '/skills',
    templateUrl: '/js/skills/skills.html',
    controller: 'Skills'
  })
})