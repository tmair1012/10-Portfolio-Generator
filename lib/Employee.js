class Employee {
    constructor(name, id, email){
    this.name = name;
    this.id = id;
    this.email = email;
}
getName() {
    return this.name
}
getID (){
    return this.id
}
getEmail (){
    return this.email
}
}

/* getName() {

}
getID() {

}

getEmail(){

}
} */
module.exports = Employee;