const subtract = require('../functions/subtract');

test("this properly subtracts", () => {
  expect(
    subtract(2, 1)
  ).toBe(1);
});