const { test, expect } = require('@jest/globals');
const Employee = require('../lib/Employee');

test('creates an employee Object', () => {
    const employee = new Employee();

    expect(typeof(employee)).toBe('object');
})
test('gets employee name', () => {
    const name = new Employee('Tyler');

    expect(name.getName()).toBe('Tyler')

    
})