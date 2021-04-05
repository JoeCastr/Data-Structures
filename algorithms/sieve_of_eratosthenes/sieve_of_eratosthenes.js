// create a function that finds all prime numbers up to some limit "n"

// create a boolean array of n + 1 positions (to represent the numbers 0 through n)
// set positions 0 and 1 to false, the rest to true
// start at position p = 2 (index 2 of the array)
// mark as false all the multiples of p (that is 2 * p, 3 * p, 4 * p) until you reach the end of the array
// find the first position greater than p that is true in the array
// // if there is no such position, stop. Otherwise, let p equal this new number (which is th next prime) and repeat from step 4
// when the algroithm terminates, the numbers remaining true in the arrya are all the primes below n

// start with an array of n + 1 positions, all true
// reassign array[0] and array[1] as false
// index = idx
// start at array[1], and multiply the index by 2 - every time you do this, mark the array[idx] element as false
// do this until idx >= n

// ex:
// n = 20
// index 0 = number 0
// index 1 = number 1
// [false, false, true, true, true, true] index 2 = number 2 | loop multiply index by multiplier | at each multiply
// // re-evaluate which index has a value of true and is closest to index 0 then reassign the index coutner to that value's index (indexOf)
// // check if index is greater than array.length - 1
// // // if it is, stop
// // // if it's not
// // // // change the corresponding array index element to = false
// // // // then increase multiplier by 1
// // 
// [false, false, true, true, false, true]

// create a function that creates an array of n length

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
