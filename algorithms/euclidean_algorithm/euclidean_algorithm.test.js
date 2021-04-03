const euclideanImports = require('./euclidean_algorithm');

const { euclideanAlgorithm } = euclideanImports;

test('euclideanAlgorithm(252, 105) === 21', () => {
  expect(euclideanAlgorithm(252, 105)).toBe(21);
});

test('euclideanAlgorithm(24, 60) === 12', () => {
  expect(euclideanAlgorithm(24, 60)).toBe(12);
});

test('euclideanAlgorithm(1071, 462) === 21', () => {
  expect(euclideanAlgorithm(1071, 462)).toBe(21);
});

test('euclideanAlgorithm("1", 3) === undefined', () => {
  expect(euclideanAlgorithm("1", 3)).toBe(undefined);
});

test('euclideanAlgorithm(0, 0) === undefined', () => {
  expect(euclideanAlgorithm(0, 0)).toBe(undefined);
});

test('euclideanAlgorithm(-4, 6) === undefined', () => {
  expect(euclideanAlgorithm(-4, 6)).toBe(undefined);
});