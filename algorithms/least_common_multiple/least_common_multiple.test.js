const { lowestMultipleBetween } = require('./least_common_multiple');

test('Least common multiple between 4 and 6 is 12', () => {
  expect(lowestMultipleBetween(4, 6)).toBe(12);
});

test('Least common multiple between 5 and 3 is 15', () => {
  expect(lowestMultipleBetween(5, 3)).toBe(15);
});

test('Least common multiple between 9 and 14 is 126', () => {
  expect(lowestMultipleBetween(9, 14)).toBe(126);
});

test('Least common multiple between 7 and 29 is 203', () => {
  expect(lowestMultipleBetween(7, 29)).toBe(203);
});

test('Least common multiple between 4 and 6 is 12', () => {
  expect(lowestMultipleBetween(4, 6)).toBe(12);
});

test('Least common multiple between 0 and 1 throws error', () => {
  expect(() => {
    lowestMultipleBetween(0, 1);
  }).toThrow();
});

test('Least common multiple between "a" and "b" throws error', () => {
  expect(() => {
    lowestMultipleBetween('a', 'b');
  }).toThrow();
});

test('Least common multiple between "z" and 9 throws error', () => {
  expect(() => {
    lowestMultipleBetween('z', 9);
  }).toThrow();
});
