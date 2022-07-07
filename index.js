// packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js');
const { rejects } = require('assert');

// array of questions for user input
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
            message: 'Please enter contribution guidelines'
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
            choices: ['MIT', 'WTFPL', 'MPL']
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


// function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(projectData => {
            return generateMarkdown(projectData);
        })
        .then(pageReadme => {
            return new Promise((resolve, reject) => {
                fs.writeFile('./dist/README.md', pageReadme, err => {
                    if (err) {
                        reject(err);
                        return;
                    }

                    resolve({
                        ok: true,
                        message: 'File created'
                    })
                })
            })
        })
};

// Function call to initialize app
init();
