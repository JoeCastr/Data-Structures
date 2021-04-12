# Sieve of Eratosthenes

Algorithm for finding all prime numbers up to some limit `n`.

An array is made with the same number of elements as `n`.
The defining factor is that when a number is marked a composite (not prime), all multiples of the composite are marked as not prime.
This happens for all numbers that are composite. Once a composite has only one multiple in the sequence (1 and itself) the iteration stops and all remaining numbers are prime.

Find all prime numbers up to and includes a given number `n`:

```javascript
sieveEratosthenes(41)
\\ => [ 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41 ]
```

Test

`jest sieve_of_eratosthenes.test.js`
