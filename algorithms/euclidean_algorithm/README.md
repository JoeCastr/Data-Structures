# Euclidean algorithm

The Euclidean algorithm is an efficient method for computing the greatest common divisor of two numbers.

This algorithm is based on the principle that the greatest common divisor of two numbers doesn't change if the larger number is replaced by its difference with the smaller number.

For example, `21` is the GCD of `252` and `105` and the same number `21` is also the GCD of `105` and `252 - 105 = 147`
This replacement then reduces the larger of the two numbers and the process repeats, giving successively smaller pairs of numbers until the two numbers become equal.

```javascript
euclideanAlgorithm(24, 60)
// => 12
```

Test

`jest euclidean_algorithm.test.js`
