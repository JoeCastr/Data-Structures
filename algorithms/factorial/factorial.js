// implement a function that accepts a non-negative integer
// and returns the factorial of that integer
// // factorial is defined by the product of all positive integers less than or equal to integer

// create result = 1
// while integer > 0
// // result *= integer

function factorial(int) {
  if (int <= 0) {
    return 0;
  }

  let result = 1;

  while (int > 0) {
    result *= int;
    int -= 1;
  }

  return result;
}

module.exports = factorial;
