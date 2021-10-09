const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee Object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})
test('gets employee name', () => {
    const name = new Employee('Tyler');
    expect(name.getName()).toBe('Tyler');
    
})
test('gets employee id', () => {
    const id = new Employee('Tyler', 7);

    expect(id.getID()).toBe(7);
})
test('gets employee email', () =>{
    const email = new Employee('Tyler', 7, 'tyleramair@gmail.com')

    expect(email.getEmail()).toBe('tyleramair@gmail.com')
})