const { addTwoNumbers } = require('./app');

it('can add two numbers given', () => {
    expect(addTwoNumbers(3, 5)).toBe(8);
});