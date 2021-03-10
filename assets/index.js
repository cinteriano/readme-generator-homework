const inquirer = require('inquirer');
const fs = require('fs');


    inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'how do you install this app?',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Did anybody contribute to this project?',
        
    },


    {
        type: 'list',
        name: 'licenses',
        message: 'What license did you use?',
        choices: ["MIT" , "APACHE" , "GPL" , "ISC"]

    },

    {
      type: 'input',
        name: 'usage',
        message: 'How to do you use this app?',

    },


    {
      type: 'input',
        name: 'github',
        message: 'What is your github username?',

    },




    {
      type: 'input',
        name: 'linkedin',
        message: 'What is your LinkedIn profile name?',

    },

      
      
    {
      type: 'input',
        name: 'email',
        message: 'What is your email?',

    },







  ])
  .then((data) => {
    console.log(data)
    
var html = 
`# ${data.title}
*[installation](#installation)
*[usage](#usage)
*[contributors](#contributors)
*[licenses](#licenses)
# installation
  ${data.installation}
  [![video](http://img.youtube.com/vi/3RleY_CKa1s/0.jpg)](http://www.youtube.com/watch?v=3RleY_CKa1s "read me ")
## contributors
  ${data.contributors}
## licenses
${data.licenses}
# Usage
${data.usage}
# contacts
* github ${data.github}
* linked in ${data.linkedin}
* email ${data.email}`
        
      
    
  
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

