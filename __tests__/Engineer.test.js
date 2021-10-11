const { test, expect } = require('@jest/globals')
const Engineer = require('../lib/Engineer')

test('creates Engineer object', () => {
    const engi = new Engineer

    expect(typeof(engi)).toBe('object');
})