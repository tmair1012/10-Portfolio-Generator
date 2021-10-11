const Employee = require('../lib/Employee')

class Intern extends Employee{
    constructor(name, id, email, school){
        super(name, id, email);
        this.school = school;
    }
    getSchool(){
        return school;
    }
    getRole(){
        this.role = 'Intern'
    }
}
module.exports = Intern;