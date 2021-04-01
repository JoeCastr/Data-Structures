const factorial = require("./factorial");

test('factorial(5) === 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial(9) === 120', () => {
  expect(factorial(9)).toBe(362880);
});

test('factorial(1) === 120', () => {
  expect(factorial(1)).toBe(1);
});

test('factorial(0) === 0', () => {
  expect(factorial(0)).toBe(0);
});

test('factorial(-3) === 0', () => {
  expect(factorial(-3)).toBe(0);
});
