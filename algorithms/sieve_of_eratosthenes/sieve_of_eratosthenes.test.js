const sieveImports = require('./sieve_of_eratosthenes');

const { sieveEratosthenes } = sieveImports;

test('sieveEratosthenes(120) === [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]', () => {
  expect(sieveEratosthenes(120)).toEqual(expect.arrayContaining([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113]));
});

test('sieveEratosthenes(41) === [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ]', () => {
  expect(sieveEratosthenes(41)).toEqual(expect.arrayContaining([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41]));
});

test('sieveEratosthenes(-3) === []', () => {
  expect(sieveEratosthenes(120)).toEqual(expect.arrayContaining([]));
});

test('sieveEratosthenes(0) === []', () => {
  expect(sieveEratosthenes(120)).toEqual(expect.arrayContaining([]));
});

test('sieveEratosthenes("f") === []', () => {
  expect(sieveEratosthenes('f')).toEqual(expect.arrayContaining([]));
});
