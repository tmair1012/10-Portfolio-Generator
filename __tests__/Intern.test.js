const { test } = require('@jest/globals');
const Intern = require('../lib/Intern');

test('create intern', () => {
    const intern = new Intern

    expect(typeof(intern)).toBe('object');
})