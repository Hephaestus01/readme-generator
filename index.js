// TODO: Include packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = 
    [
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('You need to enter a project title.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a project description.'
        },
        {
            type: 'input',
            name: 'install',
            message: 'Please enter installation instructions'
        },
        {
            type: 'input',
            name: 'usageInfo',
            message: 'Please enter usage information.'
        },
        {
            type: 'input',
            name: 'guidelines',
            message: 'Please enter confirmation guidelines'
        },
        {
            type: 'input',
            name: 'instructions',
            message: 'Please enter test instructions'
        },
        {
            type: 'checkbox',
            name: 'licenses',
            message: 'Please choose applicable licenses for your project:',
            choices: ['MIT', 'FOSS', 'Choice 3']
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        },
    ];

// const pageReadme = generateMarkdown(mockData);


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

const mockData = [{
    title: 'Project Title',
    description: 'Project Description Text',
    install: 'Instructions Text',
    usageInfo: 'Usage Info Test',
    guidelines: 'Guidelines Text',
    instructions: 'Test Instructions',
    licenses: 'MIT',
    username: 'Hephaestus01',
    email: 'mwhlavaty@gmail.com'
}]

// TODO: Create a function to initialize app
function init() {
    return inquirer
        .prompt(questions)
}

// Function call to initialize app
init();
