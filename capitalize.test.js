const capitalize = require('./capitalize');

test('Capitalize every first letter', () => {
  expect(capitalize('xyz'))
    .toBe('Xyz');
});