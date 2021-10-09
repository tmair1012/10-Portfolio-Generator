const inquirer = require('inquirer')
const fs = require('fs');


//questions for each member
const manager = () => [
    {
        name = 'managerName',
        type = 'input',
        message = 'Welcome hotshot, please enter your name',
    },
    {
        name = 'managerID',
        type = 'input',
        message = 'Please enter your id'
    },
    {
        name = 'email',
        type = 'input',
        message = 'Enter your email'
    },
    {
        name = 'officeName',
        type = 'input',
        message = 'What is your Office Number',
    },
   

]
const intern = [
    {
        name = 'internName',
        type = 'input',
        message = "Enter Intern's Name"
    },
    {
        name = 'internID',
        type = 'input',
        message = 'enter'
    }
]

const addEmployee = () => [{
    name = 'addEmployee',
    type = 'list',
    message = 'Would you like to add an employee',
    choices = ['yes', 'no']
}
]

generateCards = () => {
inquirer.prompt()
}