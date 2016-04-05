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
      name: 'Bennington College',
      date: '2007 - 2011',
      focus: 'Drama & Music',
      description: 'Writing, Performance, History, Dramaturgy. Entirely self-designed program, focused on history and adaptation in music and theatre.',
      degree: 'BA'
    }
  ]
})