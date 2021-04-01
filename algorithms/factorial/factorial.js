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
