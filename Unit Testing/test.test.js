const { default: TestRunner } = require("jest-runner");
const multiplyThree = require('../Test');

test('Returns the given number mul by 3', () => {
    expect(multiplyThree(2)).toBe(6);
})