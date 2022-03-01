const generateMarkdown = require('./utils/generateMarkdown.js')
// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

let filePath = './examples/README.md'


// Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your github username.',
        name: 'username',
        default: 'christierney3',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log('Please enter a valid username.');
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Enter your email address.',
        name: 'email',
        default: 'chris.tierney3@gmail.com',
        validate: function (answer) {
            if (answer.length < 3) {
                return console.log('Please enter a valid email address.');
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Enter the title of your project.',
        name: 'title',
        default: 'Best Project Ever',
        validate: function (answer) {
            if (answer.length < 1) {
               return console.log('Please enter a valid title for your project.');
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'Enter a description for your project.',
        name: 'description',
        default: 'Description',
        validate: function (answer) {
            if (answer.length < 3) {
               return console.log('Please enter a valid description for your project.');
            } else {
                return true
            }
        }
    },
    {
        type: 'input',
        message: 'If installation is required for your project describe the steps here.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information here.',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'Select which license you would like for your project.',
        choices: ['Apache License 2.0', 'MIT License', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'If you would like to allow contributors enter how to do so here.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Enter information on any tests you have used in your project.',
        name: 'tests',
    },
];

// Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), err => {
        console.log(err);
    })
}



// Create a function to initialize app
function init() {
        //call on inquirer to prompt our questions
        inquirer.prompt(questions)
            .then(response => {
                console.log('Your responses: ', response);
                //const markdown = markdown(response);
                writeToFile(filePath, response);
            });
}

// Function call to initialize app
init();
