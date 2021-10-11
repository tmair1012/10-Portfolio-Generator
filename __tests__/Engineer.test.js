const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test('creates Engineer object', () => {
    const engi = new Engineer

    expect(typeof(engi)).toBe('object');
})
test('gets Engineer name', () => {
    const name = new Engineer('Tyler');
    expect(name.getName()).toBe('Tyler');
    
})
test('gets Engineer id', () => {
    const id = new Engineer('Tyler', 7);

    expect(id.getID()).toBe(7);
})
test('gets Engineer email', () =>{
    const email = new Engineer('Tyler', 7, 'tyleramair@gmail.com')

    expect(email.getEmail()).toBe('tyleramair@gmail.com')
})