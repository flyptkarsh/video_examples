
// Examples from the article "Why Math is Hard in JavaScript: Floating Point Precision in JavaScript" by Patrick Karsh
// https://medium.com/@patrickkarsh/why-math-is-hard-in-javascript-floating-point-precision-in-javascript-41706aa7a89d

// Rounding Errors: The Most Common Culprit

// The problem is that most decimal fractions cannot be represented exactly as binary fractions.
// This is the chief reason why JavaScript doesn’t always behave as you might expect when working with decimal fractions.

// For example, the decimal fraction 0.1 has no exact binary representation,
// so it’s rounded to the nearest representable value, which is 0.1000000000000000055511151231257827021181583404541015625.

// Rounding error example
let x = 0.1 + 0.2;
console.log(x); // Output: 0.30000000000000004

// Overflow and Underflow: The Extremes
// JavaScript’s floating-point numbers have a finite precision.
// This leads to problems when you’re working with very large or very small numbers.

// Overflow example
let x = 1e309; // Infinity

console.log(x); // Output: Infinity

// Underflow example

let x = 1e-324; // 0    (underflow)
console.log(x); // Output: 0

// The largest possible number in JavaScript is 1.7976931348623157e+308.
// The smallest possible number is 5e-324.

// NaN Errors: Undefined Operations

// NaN is a special value that stands for “Not a Number”.

// NaN example

let x = 0 / 0;

console.log(x); // Output: NaN

// NaN is the result of undefined or erroneous operations.

// NaN example

let x = NaN;

console.log(x + 5); // Output: NaN

// NaN is toxic: if you provide it as input to any mathematical operation the result will also be NaN.

// Loss of Significance: The Subtle Thief

// Loss of significance occurs when an operation on two numbers increases relative error substantially more than absolute error.

// Loss of significance example

let x = 1e17;

console.log(x + 1 - x); // Output: 0

// In this example, the result of x + 1 is the same as x,

// so the final result is 0.

// Associative Law: A Broken Rule in Floating-Point Arithmetic
// In mathematics, the associative law states that the order
// of operations does not affect the result. However,
// this law does not always hold in JavaScript’s floating-point arithmetic:

// Associative law example

let x = 0.1;
let y = 0.2;
let z = 0.3;

console.log(x + y + z); // Output: 0.6000000000000001

console.log(x + (y + z)); // Output: 0.6

// The reason for this is that x + y is evaluated first,
// and the result is then added to z.
// But the result of x + y is not exactly 0.3,
// since that is not representable in binary floating-point.
