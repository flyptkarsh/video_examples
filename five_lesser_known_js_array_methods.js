// Five Lesser-Known JavaScript Array Methods: Mastering Javascript
// https://medium.com/p/5edad158673c

// Array.from(string)
// Array.from() is a static method that creates a new, shallow-copied Array instance from an array-like or iterable object.
// Array.from() example
let str = "hello";
let arr = Array.from(str);
console.log(arr); // Output: ['h', 'e', 'l', 'l', 'o']

// Array.of()
// Array.of() is a static method that creates a new Array instance with a variable number of arguments, regardless of number or type of the arguments.
// Array.of() example
let arr = Array.of(1, 2, 3, 4, 5);
console.log(arr); // Output: [1, 2, 3, 4, 5]

// Array.prototype.fill()
// Array.prototype.fill() is a method that fills all the elements of an array from a start index to an end index with a static value.
// Array.prototype.fill() example
let arr = new Array(5).fill(0);
console.log(arr); // Output: [0, 0, 0, 0, 0]

// Array.prototype.find()
// Array.prototype.find() is a method that returns the value of the first element in the array that satisfies the provided testing function.
let numbers = [1, 2, 3, 4, 5];
let found = numbers.find((element) => element > 3);
console.log(found); // Output: 4

// Array.prototype.findIndex()
// Array.prototype.findIndex() is a method that returns the index of the first element in the array that satisfies the provided testing function.
let numbers = [1, 2, 3, 4, 5];
let found = numbers.findIndex((element) => element > 3);
console.log(found); // Output: 3
