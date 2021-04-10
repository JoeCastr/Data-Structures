# Pascal's Triangle

Defined as a triangular array of the binomial coefficients.

## Approach

My first approach was to use nested arrays for this problem. With a nested array I could have accessed a
previous sub-array, but it would create a lot of complexity.

In natural English it made sense to me to say "I want to access the second row of this data structure."
That wasn't very readable in array notation.

If the structure were an object I could use `this` keyword. I would also need to define my execution context.
This can be done with the use of a class.

```javascript
let pascal = new Pascal(3);

pascal.triangle
// { '0': [1],
//   '1': [1, 1],
//   '2': [1, 2, 1],
//   '3': [1, 3, 3, 1],
// }
```

If I want Pascal's Triangle, I want to submit my desired number of rows and receive a structure with an equal
number of rows. As a class, I can pass the number of rows upon instantiation and receive a triangle of
my desired size.

