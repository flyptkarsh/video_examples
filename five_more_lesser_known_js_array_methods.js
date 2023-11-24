// https://patrickkarsh.medium.com/ed0079c1febb
// Five More Lesser-Known Array Methods in JavaScript: Mastering JavaScript

// Array.prototype.flat()
// Array.prototype.flat() is a method that creates a new array with all sub-array elements concatenated into it recursively up to the specified depth.
// Array.prototype.flat() example
let arr = [1, 2, [3, 4, [5, 6]]];
console.log(arr.flat()); // Output: [1, 2, 3, 4, [5, 6]]

// Array.prototype.flatMap()
// Array.prototype.flatMap() is a method that first maps each element using a mapping function, then flattens the result into a new array.
// Array.prototype.flatMap() example

let arr = [1, 2, 3, 4, 5];
let mapped = arr.map((element) => [element * 2]);
console.log(mapped); // Output: [[2], [4], [6], [8], [10]]
let flatMapped = arr.flatMap((element) => [element * 2]);
console.log(flatMapped); // Output: [2, 4, 6, 8, 10]

// Array.prototype.includes()
// Array.prototype.includes() is a method that determines whether an array includes a certain value among its entries, returning true or false as appropriate.
// Array.prototype.includes() example

let arr = [1, 2, 3, 4, 5];
console.log(arr.includes(3)); // Output: true
console.log(arr.includes(6)); // Output: false

// Array.prototype.copyWithin()
// Array.prototype.copyWithin() is a method that shallow copies part of an array to another location in the same array and returns it without modifying its length.
// Array.prototype.copyWithin() example

let arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(0, 3)); // Output: [4, 5, 3, 4, 5]
console.log(arr.copyWithin(0, 3, 4)); // Output: [4, 2, 3, 4, 5]    (start, end, end)

// Array.prototype.some()
// Array.prototype.some() is a method that tests whether at least one element in the array passes the test implemented by the provided function.
// Array.prototype.some() example

let arr = [1, 2, 3, 4, 5];
let found = arr.some((element) => element > 3);
console.log(found); // Output: true
let found = arr.some((element) => element > 9);
console.log(found); // Output: false
