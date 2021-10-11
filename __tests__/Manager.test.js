const { test, expect } = require('@jest/globals');
const Manager = require('../lib/Manager');

test('creates a new manager from employee', () => {
    const man = new Manager

    expect(typeof(man)).toBe('object');
})