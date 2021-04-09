const Pascal = require('./pascals_triangle');

// const { Pascal } = pascalClasses;

test('const test = new Pascal(), test.triangle is an array', () => {
  const test = new Pascal();
  const testingTriangleIsArray = Array.isArray(test.triangle['0']);
  expect(testingTriangleIsArray).toBe(true);
});

test('const test = new Pascal(), test.triangle contains 1', () => {
  const test = new Pascal();
  expect(test.triangle['0'][0]).toBe(1);
});

test('const test = new Pascal(), test.triangle array length is 1', () => {
  const test = new Pascal();
  expect(test.triangle['0'].length).toEqual(1);
});
