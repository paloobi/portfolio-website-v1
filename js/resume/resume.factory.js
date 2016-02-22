app.factory('Jobs', function() {

  return [
    {
      company: 'Shape Security',
      title: 'Senior Technical Writer',
      date: '2015',
      details: [
        'Translate PDF documentation into single-sourced HTML and PDF docs using Sphinx documentation tool',
        'Create and maintain custom Python build script for the Technical Documentation Library',
        'Work with engineering team to create automated documentation',
        'Collaborate with engineering, support, and product teams to provide accurate documentation for the ShapeShifter Botwall'
      ]
    },
    {
      company: 'A10 Networks',
      title: 'Senior Technical Writer',
      date: '2014-2015',
      details: [
        'Authored user guide for RESTful API.',
        'Worked with automation team to deliver new automated API Reference using Sphinx.',
        'Provided solution for transitioning from PDF to HTML documentation.'
      ]
    },
    {
      company: 'A10 Networks',
      title: 'Technical Writer',
      date: '2013-2014',
      details: [
        'Implemented new context-sensitive help system using FrameMaker HTML output, with custom CSS and JavaScript topic mapping, while managing the GUI documentation for a major release.',
        'Restructured and managed the System Administration and Configuration guide for a major release.',
        'Restructured and improved the reference material for proprietary, Tcl-based scripting language, working in collaboration with subject matter experts across departments.'
      ]
    }
  ]

})

app.factory('Education', function() {
  return [
    {
      name: 'Grace Hopper Academy',
      date: '2016',
      focus: 'Full-stack JavaScript Web Development',
      description: 'Immersive, full-time, all-women intensive program in web development using the MEAN stack: MongoDB, Express.js, Angular.js, and Node.js.',
      degree: null
    },
    {
      name: 'Skillcrush',
      date: '2014',
      focus: 'Web Developer Blueprint',
      description: 'Basic introduction to full-stack web development using HTML/CSS, Ruby/Sinatra and JavaScript/jQuery.',
      degree: null
    },
    {
      name: 'Bennington College',
      date: '2011',
      focus: 'Drama & Music',
      description: 'Writing, Performance, History, Dramaturgy. Entirely self-designed program, focused on history and adaptation in music and theatre.',
      degree: 'BA'
    }
  ]
})