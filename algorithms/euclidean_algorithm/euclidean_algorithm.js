// euclidean algorithm computes the greatest common divisor of two numbers
// // greatest common divisor = the largest number that divides both of them without leaving a remainder

// the greatest common divisor of two numbers does not change if the larger number is replaced by
// its difference with the smaller number

// to use the euclidean algorithm, I must take both numbers and subtract the lowest from the highest
// and I must store that value
// and I must reassign the higher number to highest between difference and lowest
// // if the difference is below the lowest, now I've assigned the highest to lowest
// // if the difference is above the lowest, now I"ve assigned the highest to the difference
// and I must reassign the lowest number to lowest between highest, difference

// Pseudocode:
// num1 = a
// num2 = b
// highest = whichNumIsHighest(num1, num2)
// lowest = whichNumIsLowest(num1, num2)
// let difference = highest - lowest
// // highest = whichNumIsHighest(difference, lowest)
// // lowest = whichNumIsLowest(highest, lowest)
// // // continues until BOTH the highest and lowest are EQUAL


// whichNumIsHighest

/*

ex:
252 and 105
GCD is 21

252-105=147

*/

function whichNumIsHighest(...args) {
  let nums = [...args];
  nums.sort((a, b) => a - b );
  return nums[(nums.length - 1)];
}

function whichNumIsLowest(...args) {
  let nums = [...args];
  nums.sort((a, b) => a - b );
  return nums[0];
}

function verifyInput(...args) {
  let argArray = [...args];
  let testedArgs = argArray.filter(function(element) {
    let isGreaterThanZero = element > 0;
    let isInteger = Number.isInteger(element);
    return isInteger && isGreaterThanZero;
  });

  return argArray.length === testedArgs.length;
}

function euclideanAlgorithm(num1, num2) {
  if (!verifyInput(num1, num2)) {
    return undefined;
  }
  let highest = whichNumIsHighest(num1, num2);
  let lowest = whichNumIsLowest(num1, num2);
  let difference;

  while (highest > lowest) {
    difference = highest - lowest;
    highest = whichNumIsHighest(difference, lowest);
    lowest = whichNumIsLowest(lowest, difference);
  }

  return highest;
}

module.exports = {
  euclideanAlgorithm,
};
