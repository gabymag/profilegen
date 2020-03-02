const inquirer = require("inquirer");
const axios = require("axios");
const inquirer = require("inquirer");

.prompt([
            {
                name: 'name',
                message: 'What is your name?',
                type: 'input',
            },
            {
                name:'email',
                message: 'What is your email?',
                type: 'input',
            },
            {
                name: 'ID',
                message: 'What is your ID?',
                type: 'input',
            },
            {
                name: 'Position',
                message: 'What is your position?',
                type: 'input',
            }
        
           
        ])
        .then(answers => {
            console.log(answers);
        
            
            `
            fs.writeFile('Profile.html', content, () => {})

              }); 
        });