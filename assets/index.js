const inquirer = require('inquirer');
const fs = require('fs');


    inquirer
  .prompt([
    {
      type: 'input',
      name: 'profilename',
      message: 'What is your name?',
    },
    {
      type: 'input',
      name: 'location',
      message: 'What is your location?',
    },
    {
        type: 'input',
        name: 'url',
        message: 'What is your LinkedIn profile name?',
    },
  ])
  .then((data) => {
    console.log(data)
    
    var html = `# ${data.profilename}
    ** ${data.location}
    - ${data.url}
  
  `
        
      
    
  
    fs.writeFile('readme.md', html, function (err) {
        if (err) console.log(err)
      })
  });


//   const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

