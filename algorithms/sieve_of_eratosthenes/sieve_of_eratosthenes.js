function createEratosthenesArray(n) {
  const result = [];

  for (let idx = 0; idx <= n; idx += 1) {
    result[idx] = true;
  };

  result[0] = false;
  result[1] = false;

  return result;
}

function findAllTrueIndexes(arr) {
  const result = [];

  for (let idx = 0; idx < arr.length; idx += 1) {
    if (arr[idx]) {
      result.push(idx);
    };
  };

  return result;
}

function sieveEratosthenes(n) {
  let eratosthenesArray = createEratosthenesArray(n);

  for (let prime = 2; prime < eratosthenesArray.length; prime += 1) {
    let currentSquared = prime * prime;
    if (currentSquared > eratosthenesArray.length) {
      break;
    };
    
    for (currentSquared; currentSquared < eratosthenesArray.length; currentSquared += prime) {
      eratosthenesArray[currentSquared] = false;
    };
  };

  return findAllTrueIndexes(eratosthenesArray);
}

module.exports = {
  sieveEratosthenes,
};
