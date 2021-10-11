const Employee = require('../lib/Employee')


class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
getOfficeNumber(){
    return this.officeNumber;
}
getRole(){
    this.role = 'Manager'
}
    }
       


module.exports = Manager;