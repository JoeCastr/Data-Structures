function whichNumIsHighest(...args) {
  const nums = [...args];
  nums.sort((a, b) => a - b );
  return nums[(nums.length - 1)];
}

function whichNumIsLowest(...args) {
  const nums = [...args];
  nums.sort((a, b) => a - b );
  return nums[0];
}

function verifyInput(...args) {
  const argArray = [...args];
  const testedArgs = argArray.filter((element) => {
    const isGreaterThanZero = element > 0;
    const isInteger = Number.isInteger(element);
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
