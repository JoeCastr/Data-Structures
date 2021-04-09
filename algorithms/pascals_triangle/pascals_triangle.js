class Pascal {
  constructor() {
    this.triangle = {
      0: [1],
    };
  }

  createNextRow() {
    const allRowNumbers = Object.keys(this.triangle);
    const endKey = allRowNumbers[(allRowNumbers.length - 1)];
    const previousArray = this.triangle[endKey];
    const currentKeyArray = new Array(previousArray.length + 1);
    currentKeyArray[0] = 1;
    currentKeyArray[(currentKeyArray.length - 1)] = 1;

    for (let index = 1; index < (currentKeyArray.length - 1); index += 1) {
      let newPascalValue;

      if (!Number.isInteger(previousArray[index])) {
        newPascalValue = previousArray[(index - 1)];
      } else {
        newPascalValue = previousArray[(index - 1)] + previousArray[index];
      }

      currentKeyArray[index] = newPascalValue;
    }

    this.triangle[(Number(endKey) + 1)] = currentKeyArray;
  }
}

module.exports = Pascal;
