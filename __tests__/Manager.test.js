const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a new manager from employee', () => {
    const man = new Manager

    expect(typeof(man)).toBe('object');
})
test('gets manager name', () => {
    const name = new Manager('Tyler');
    expect(name.getName()).toBe('Tyler');
    
})
test('gets manager id', () => {
    const id = new Manager('Tyler', 7);

    expect(id.getID()).toBe(7);
})
test('gets manager email', () =>{
    const email = new Manager('Tyler', 7, 'tyleramair@gmail.com')

    expect(email.getEmail()).toBe('tyleramair@gmail.com')
})