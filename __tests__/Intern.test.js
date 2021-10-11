const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern object', () => {
    const intern = new Intern

    expect(typeof(intern)).toBe('object');
})
test('gets Intern name', () => {
    const name = new Intern('Tyler');
    expect(name.getName()).toBe('Tyler');
    
})
test('gets Intern id', () => {
    const id = new Intern('Tyler', 7);

    expect(id.getID()).toBe(7);
})
test('gets Intern email', () =>{
    const email = new Intern('Tyler', 7, 'tyleramair@gmail.com')

    expect(email.getEmail()).toBe('tyleramair@gmail.com')
})