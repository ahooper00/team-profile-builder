const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');
const { type } = require('os');

const teamProfile = [];

const firstQuestionPrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'members',
            message: `Do you want to add a team member?`,
            choices: ['Yes', 'No'],
        }
    ]).then(answers => {
        const addTeamMember = answers.members;
        return addTeamMember === 'Yes'
    })
}

async function startQuestions() {
    let addTeamMember = await firstQuestionPrompt();
    while (addTeamMember) {
        await employeeTypePrompt();
        addTeamMember = await firstQuestionPrompt();
    }
    createTeamProfile(); // function that puts info into HTML page
}

const employeeTypePrompt = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'typeOfEmployee',
            message: `What type of employee would you like to add?`,
            choices: ['Manager', 'Engineer', 'Intern'],
        },
    ]).then(answers => {
        const employeeType = answers.typeOfEmployee;
        if (employeeType === 'Manager') {
            return managerPrompt();
        } else if (employeeType === 'Engineer') {
            return engineerPrompt();
        } else if (employeeType === 'Intern') {
            return internPrompt();
        }
    });
}

const managerPrompt = () => {
    return inquirer.prompt([
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
    });
}

const engineerPrompt = () => {
    return inquirer.prompt([
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
    });
}

const internPrompt = () => {
    return inquirer.prompt([
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
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        teamProfile.push(intern);
    });
}

startQuestions();