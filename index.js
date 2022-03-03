const generateMarkdown = require('./utils/generateMarkdown.js')
// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');


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
        default: 'This is a description of the installation process needed to run the generator',
    },
    {
        type: 'input',
        message: 'Enter usage information here.',
        name: 'usage',
        default: 'This is a usage information section',
    },
    {
        type: 'list',
        message: 'Select which license you would like for your project.',
        choices: ['Apache2.0', 'MIT', 'Unlicense'],
        name: 'license',
        default: 'MIT',
    },
    {
        type: 'input',
        message: 'If you would like to allow contributors enter how to do so here.',
        name: 'contributing',
        default: 'Contributing is open to anyone!'
    },
    {
        type: 'input',
        message: 'Enter information on any tests you have used in your project.',
        name: 'tests',
        default: 'These tests were run:'
    },
];

// Create a function to initialize app
function init() {
        //call on inquirer to prompt our questions
        inquirer.prompt(questions)
            .then((answers) => 
                fs.writeFile('./examples/README.md', generateMarkdown(answers), function (err) {
                    if (err) throw err;
                }))
                    .then(() => console.log('README succesfully generated.'))
                    .catch((err) => console.log(err));
}

// Function call to initialize app
init();
