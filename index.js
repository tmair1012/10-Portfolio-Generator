const inquirer = require('inquirer')
const fs = require('fs');


//questions for each member
const manageQuestions = () => {
    inquirer.prompt([
    {
        type = 'input',
        name = 'name',
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
    {
        name = 'addEmployee',
        type = 'list',
        message = 'which type of employee would you like to add',
        choices = ['Engineer', 'Intern']
    }
])
.then(function(data){
    switch(data){
        case 'Engineer':
            inquirer.prompt([{
                name: 'github',
                type: 'input',
                message: 'Please enter Engineer github'
            }
            ])
    }
    switch(data){
        case 'Intern':
            inquirer.prompt([{
                name: 'school',
                type: 'input',
                message: 'Please enter Intern school'

            }])
    }
})
}
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
    },
    {
        name = 'internEmail',
        type = 'input',
        message = 'please enter Intern email'
    },
    {
        name = 'internSchool',
        type = 'input',
        message = 'please enter Intern school'

    }
]

/*const employ =
inquirer.prompt()[{
    name: 'addEmployee',
    type: 'input',
    message: 'Would you like to add an employee',
}];


//generateCards = () => {

function addEmployee(){
    employ;
}
addEmployee();
//}
//generateCards(); */
manageQuestions();
