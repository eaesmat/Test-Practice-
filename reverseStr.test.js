const reverseString = require("./reverseStr")

test('Reverse "zyx" --> "xyz"', () => {
  expect(reverseString('zyx'))
    .toBe('xyz');
});