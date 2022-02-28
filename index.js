// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Include our own generateMarkdown file
const markdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter your github username.',
        name: 'username',
        default: 'christierney3',
        validate: function (response) {
            if (response.length < 3) {
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
        validate: function (response) {
            if (response.length < 3) {
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
        validate: function (response) {
            if (response.length < 1) {
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
        validate: function (response) {
            if (response.length < 3) {
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
        type: 'input',
        message: '',
        name: '',
    },
    {
        type: 'list',
        message: 'Select which license you would like for your project.',
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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err);
        } else console.log('Your README file has succesfully generated');
    })
}

// TODO: Create a function to initialize app
async function init() {
    try {
        // set values to call on inquirer to prompt our questions
        const responses = await inquirer.prompt(questions);
        console.log('Your responses: ', responses);

        // generate readme through our generate markdown file
        const genMarkdown = markdown(responses);
        console.log(genMarkdown);

        // Append file to example README

        fs.appendFile('example.md', genMarkdown);
        
    } catch (err) {
        console.log(error);
    }
};

// Function call to initialize app
init();
