app.factory('ProjectList', function() {
  var baseRepo = 'https://github.com/paloobi/'
  return [
      {
        name: 'Guessing Game',
        date: 'Dec 2015',
        repo: baseRepo + 'guessing-game',
        link: 'http://alex.polubiec.com/guessing-game/',
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
        display: true
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
        display: true
      }
    ]
})