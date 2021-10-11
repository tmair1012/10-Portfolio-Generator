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

generateCards = () => {
    let htmlGenerate = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <title>Portfolio Generator</title>
    </head>
    <body>
        <header class = "bg-danger">
            <h1>Team Portfolio Generator</h1>
        </header>
        <main>
            <div class="container d-flex flex-wrap space-between">`
    let managerHTML = `<div class="card" style="max-width: 18rem;">
    <h3> ${theManager.name} <h3>
    <div class="card-body">
      <h5 class="card-title">Manager</h5>
      <p class="card-text">Office Number: ${theManager.officeNumber}</p>
      <p class="card-text"><small class="text-muted">Manager ID: ${theManager.id}</small></p>
        <a href = "mailto:${theManager.email}">Send Email</a>
      </div>`
      let engineerHTMLCode = ""
      for(let i=0;i<engineerArray.length;i++){
          engineerHTMLCode +=`<div class="card" style="max-width: 18rem;">
          <h3> ${engineerArray[i].name} <h3>
          <div class="card-body">
            <h5 class="card-title">Engineer</h5>
            <p class="card-text">Github: ${engineerArray[i].github}</p>
            <p class="card-text"><small class="text-muted">Engineer ID: ${engineerArray[i].id}</small></p>
              <a href = "mailto:${engineerArray[i].email}">Send Email</a>
            </div>`
      }
      let internHTMLCode =''
      for(let i=0;i<internArray.length;i++){
        internHTMLCode +=`<div class="card" style="max-width: 18rem;">
        <h3> ${internArray[i].name} <h3>
        <div class="card-body">
          <h5 class="card-title">Intern</h5>
          <p class="card-text">School: ${internArray[i].school}</p>
          <p class="card-text"><small class="text-muted">Intern ID: ${internArray[i].id}</small></p>
            <a href = "mailto:${internArray[i].email}">Send Email</a>
          </div>`
    }
    let htmlGenerateEnd = `</div>
    </main>>
</body>
</html>`

let fileData = htmlGenerate + managerHTML + engineerHTMLCode + internHTMLCode + htmlGenerateEnd;
fs.writeFileSync('./index.html', fileData, function(err,resp){
    if (err) throw err;
})
console.log("File",fileData)
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
