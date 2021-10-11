const Employee = require('../lib/Employee')

class Engineer extends Employee{
    constructor(name, id, email, github){
        super(name, id, email)
        this.github = github;
    }
    getGitHub(){
        return this.github;
    }
    getRole(){
        this.role = 'Engineer'
    }
}

module.exports = Engineer;