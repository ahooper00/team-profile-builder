const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');

const teamProfile = [];

const managerPrompt = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the manager's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `Please provide the manager's ID`,
            },
            {
                type: 'input',
                name: 'email',
                message: `Please provide the manager's email address`,
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: `Please provide manager's office number`,
            },
        ]).then(answers => {
            const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
            teamProfile.push(manager);
            res();
        });
    });
}

managerPrompt();

const engineerPrompt = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the engineer's name?`,
            },
            {
                type: 'input',
                name: 'id',
                message: `Please provide the engineer's ID`,
            },
            {
                type: 'input',
                name: 'email',
                message: `Please provide the engineer's email address`,
            },
            {
                type: 'input',
                name: 'github',
                message: `Please provide engineer's GitHub username`,
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
            teamProfile.push(engineer);
            res();
        });
    });
}

const internPrompt = () => {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the intern name?',
            },
            {
                type: 'input',
                name: 'id',
                message: 'Please provide the intern ID',
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please provide the intern email address',
            },
            {
                type: 'input',
                name: 'school',
                message: 'Please provide the intern school name',
            }
        ]).then(answers => {
            const intern = new Intern(answers.name, anwers.id, answers.email, answers.school);
            teamProfile.push(intern);
            res();
        });
    });
} 