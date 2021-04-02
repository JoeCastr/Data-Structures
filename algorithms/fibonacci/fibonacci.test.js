const fibonacciImports = require('./fibonacci');

const { fibonacci } = fibonacciImports;

test('fibonacci(4) === 2', () => {
  expect(fibonacci(4)).toBe(2);
});

test('fibonacci(1) === 0', () => {
  expect(fibonacci(1)).toBe(0);
});

test('fibonacci(9) === 21', () => {
  expect(fibonacci(9)).toBe(21);
});

test('fibonacci(-2) === undefined', () => {
  expect(fibonacci(-2)).toBe(undefined);
});

test('fibonacci("1") === undefined', () => {
  expect(fibonacci('1')).toBe(undefined);
});

test('fibonacci(0) === undefined', () => {
  expect(fibonacci(0)).toBe(undefined);
});
