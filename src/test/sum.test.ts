const sum = require('../functions/sum');

test('function adds correctly', () => {
  expect(
    sum(1,2)
  ).toBe(3);
})