function lowestMultipleBetween(num1, num2) {
  if (!verifyInt(num1) || !verifyInt(num2)) {
    throw new Error('enter only positive integer');
  }

  let lcd = 0;
  const originalNum1 = num1;
  const originalNum2 = num2;
  const previousNumOnes = [num1];
  const previousNumTwos = [num2];

  while (!lcd) {
    num1 += originalNum1;
    num2 += originalNum2;

    previousNumOnes.push(num1);
    previousNumTwos.push(num2);

    if (previousNumOnes.includes(num2)) {
      lcd = num2;
    } else if (previousNumTwos.includes(num1)) {
      lcd = num1;
    }
  }

  return lcd;
}

function verifyInt(arg) {
  return Number.isInteger(arg) && arg > 0;
}

module.exports = {
  lowestMultipleBetween,
  verifyInt,
};
