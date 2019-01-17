app.factory('SkillList', function() {

    return [
        {
          name: "Advanced",
          skills: [
            { name: "JavaScript" },
            { name: "React" },
            { name: "Relay" },
            { name: "GraphQL" },
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "Git/Github" },
            { name: "Integration & Unit Testing"},
            { name: "REST APIs" },
            { name: "Software & API Documentation" },
            { name: "Writing" },
            { name: "Public Speaking" },
          ]
        },
        {
          name: "Proficient",
          skills: [
            { name: "Python" },
            { name: "Hack/PHP" },
            { name: "Flow" },
            { name: "Jest" },
            { name: "Angular 1.x" },
            { name: "Node" },
            { name: "Express" },
            { name: "MongoDB" },
            { name: "Mongoose" },
            { name: "Network Protocols" },
            { name: "Deployment" },
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
            { name: "AWS" },
            { name: "SVN" },
            { name: "Mocha" },
            { name: "Chai" },
          ]
        }
      ]

});
