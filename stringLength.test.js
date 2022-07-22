const stringLength = require('./stringLength');

test('Total length of the input string', () => {
  expect(stringLength('12345'))
    .toBe(5);
});

test('Throw an error if string is less than 1 char long', () => {
  expect(() => stringLength(''))
    .toThrow();
});

test('Throw an error if string is more than 5 chars long', () => {
  expect(() => stringLength('this should be 5 character long'))
    .toThrow(Error);
});