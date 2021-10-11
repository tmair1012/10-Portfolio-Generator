const inquirer = require('inquirer')
const fs = require('fs');

const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
let theManager = "";
let internArray = [];
let engineerArray = [];
//questions for each member
const manageQuestions = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'Welcome hotshot, please enter your name',
        },
        {
            name: 'managerID',
            type: 'input',
            message: 'Please enter your id'
        },
        {
            name: 'email',
            type: 'input',
            message: 'Enter your email'
        },
        {
            name: 'officeName',
            type: 'input',
            message: 'What is your Office Number',
        }

    ])
        .then(function (data) {
            theManager = new Manager(data.name, data.managerID, data.email, data.officeName)
            console.log('The Manager', theManager);
            addEmployee();
        })
}

function addIntern() {
    const intern = [
        {
            name: 'internName',
            type:'input',
            message: "Enter Intern's Name"
        },
        {
            name:'internID',
            type:'input',
            message: 'enter'
        },
        {
            name: 'internEmail',
            type: 'input',
            message: 'please enter Intern email'
        },
        {
            name: 'internSchool',
            type: 'input',
            message: 'please enter Intern school'

        }
    ]
    inquirer.prompt(intern)
    .then(function(data){
        let myIntern = new Intern(data.internName, data.internID, data.internEmail, data.internSchool)
        internArray.push(myIntern);
        console.log(internArray);
        addEmployee();
    })
}

function addEngineer() {
    const engineer = [
        {
            name: 'engineerName',
            type:'input',
            message: "Enter Engineer's Name"
        },
        {
            name:'EngineerID',
            type:'input',
            message: 'enter'
        },
        {
            name: 'EngineerEmail',
            type: 'input',
            message: 'please enter Engineer email'
        },
        {
            name: 'EngineerGithub',
            type: 'input',
            message: 'please enter Engineer Github'

        }
    ]
    inquirer.prompt(engineer)
    .then(function(data){
        let myEngineer = new Engineer(data.engineerName, data.EngineerID, data.EngineerEmail, data.EngineerGithub)
        engineerArray.push(myEngineer);
        console.log(engineerArray);
        addEmployee();
    })
}

/*const employ =
inquirer.prompt()[{
    name: 'addEmployee',
    type: 'input',
    message: 'Would you like to add an employee',
}];

*/
//generateCards = () => {

function addEmployee() {
    inquirer.prompt([
        {
            name: 'addEmployee',
            type: 'list',
            message:'which type of employee would you like to add',
            choices: ['Engineer', 'Intern', "Exit Application"]
        }
    ])
        .then(data => {
            switch (data.addEmployee) {
                case 'Engineer':
                    addEngineer();
                    break;
                case 'Intern':
                    addIntern();
                    break;
                default:
                    generateCards();
            }
        })
}
//}
//generateCards(); 
manageQuestions();
