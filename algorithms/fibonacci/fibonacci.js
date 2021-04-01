// fibonacci numbers are characterized by the fact that every number after the first two is
//    the sum of the first two preceding ones
// always starts with 0, 1

// problem: write a function that accepts an integer n and returns the nth fibonacci number in the fibonacci sequence

// fibonacci(4) = 2 [0, 1, 1, 2]
// fibonacci(5) = 

// create a fibonacci array
// create a fucntion to look through the array and return the n index (not the array index) so n = 1 would be index 0

// create a fucntion that builds a fibonacci sequence within an array
// // the array starts with [0, 1]
// // the function will need to create an array with length === n

function fibonacci(n) {
  if (!n || !Number.isInteger(n)) {
    return;
  }

  let fibNumbers = [0, 1];

  while (fibNumbers.length <= n) {
    let nextFibNumber = createFibonacciNumber(fibNumbers);
    fibNumbers.push(nextFibNumber);
  }

  return fibNumbers[(n - 1)];
};

function createFibonacciNumber(arr) {
  let secondToLastIndex = arr.length - 2;
  let lastTwo = arr.slice(secondToLastIndex);

  return lastTwo.reduce((a, b) => a + b);
};

module.exports = {
  fibonacci,
  createFibonacciNumber
};
