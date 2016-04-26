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
          'Built routes, models and RESTful API for compositions, tracks and loops',
          'Engineered interface to save front­end music and visual data into the database as JSON',
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
          'Analyzed data from 100,000+ characters from Comic Vine API to uncover gender statistics in comic books',
          'Created custom Angular filters that use URL query strings to filter by comic publisher',
          'Built responsive SVG charts using Chartist.js for data visualization'
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
          'Web app plays an appropriate YouTube video depending on emotion'
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
