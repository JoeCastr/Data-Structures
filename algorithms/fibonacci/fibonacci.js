function fibonacci(n) {
  if (!n || !Number.isInteger(n)) {
    return;
  }

  const fibNumbers = [0, 1];

  while (fibNumbers.length <= n) {
    const nextFibNumber = createFibonacciNumber(fibNumbers);
    fibNumbers.push(nextFibNumber);
  }

  return fibNumbers[(n - 1)];
}

function createFibonacciNumber(arr) {
  const secondToLastIndex = arr.length - 2;
  const lastTwo = arr.slice(secondToLastIndex);

  return lastTwo.reduce((a, b) => a + b);
}

module.exports = {
  fibonacci,
  createFibonacciNumber,
};
