// 1
console.log(a); // undefined
var a = 10;
// Output: undefined
// Explanation: var is hoisted but initialized as undefined.

// 2.
console.log(foo()); // Hello
function foo() {
  return "Hello!";
}
// Explanation: Function declarations are hoisted completely.

// 3.
console.log(x);
let x = 5;
// Output: ReferenceError: Cannot access 'x' before initialization
// Explanation: let is hoisted but not initialized before declaration.

// 4.
{
  var a = 10;
  let b = 20;
}
console.log(a); // 10
console.log(b); // ReferenceError: b is not defined
// Explanation: var is function-scoped, let is block-scoped.

// 5.
var a = 5;
var a = 10;
console.log(a); // 10
// Explanation: var allows redeclaration within the same scope.

// 6. closures
function outer() {
  let a = 10;
  function inner() {
    console.log(a);
  }e
  return inner;
}
const fn = outer();
fn(); // 10
// Explanation: inner() retains access to a due to closure.

// 7. Function inside a loop (var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3 3 3
}
// Explanation: var is function-scoped; it updates to 3 before setTimeout executes.

// 8. Function inside a loop (let)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0 1 2
}
// Explanation: let creates a new scope for each iteration.

// 9. Default Parameter Evaluation
function foo(x = 10, y = x + 5) {
  console.log(x, y); // 10 15
}
foo();
// Explanation: Default values are evaluated left-to-right.

//10. Object Property Overwriting
const obj = { a: 1, a: 2 };
console.log(obj.a); // 2
// Explanation: Object keys are unique, last value overwrites previous ones.

// 11.Destructuring Undefined Property
const { a, b } = { a: 1 };
console.log(a, b); // 1 undefined
// Explanation: b doesn't exist in the object.

// 12. Template Literals with Expressions
const a = 5;
console.log(`${a} + 5 = ${a + 5}`); // "5 + 5 = 10"

// 13.  Object Comparison
console.log({} === {}); // false
//Explanation: Objects are compared by reference, not by value.

// 14. Array Length Manipulation
const arr = [1, 2, 3, 4];
arr.length = 2;
console.log(arr); // [1, 2]
// Explanation: Changing length truncates the array.

// 15.Spread Operator with Objects
const obj1 = { a: 1 };
const obj2 = { ...obj1, a: 2 };
console.log(obj2); // { a: 2 }
// Explanation: Spread copies properties, and later values overwrite previous ones.

// 16. typeof null
console.log(typeof null);
("object");
// Explanation: It's a known bug in JavaScript.

// 17. typeof NaN
console.log(typeof NaN); // "number"
// Explanation: NaN is a special numeric value.

// 18. Boolean Conversion
console.log(!!"false", !!""); // true false
//  Explanation: Non-empty strings are truthy, empty strings are falsy.

// 19. Array join Method
console.log([1, 2, 3] + [4, 5, 6]); // "1,2,34,5,6"
// Explanation: Arrays are converted to strings and concatenated.

// 20. Async/Await with Promise
async function test() {
  return "Hello";
}
console.log(test()); // Promise { "Hello" }
// Explanation: async functions return a Promise.

// 21. Promise Execution Order
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
//output:  start End Promise Timeout
// Explanation:
// Synchronous code runs first (Start, End).
// Microtask queue (Promise) runs before macrotask (setTimeout).

// 22.  setTimeout inside Promise
Promise.resolve().then(() => {
  console.log("Promise");
  setTimeout(() => console.log("Timeout"), 0);
});
// Promise Timeout
// Explanation:
// Promise executes immediately (microtask queue).
// setTimeout runs in the next event loop cycle.

// 23. setTimeout in a loop (var)
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output (after 1 second):
// 3 3 3
// Explanation: var is function-scoped and updates to 3 before setTimeout executes.

// 24.  setTimeout in a loop (let)
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000);
}
// Output (after 1 second): 0 1 2
// Explanation: let creates a new scope per iteration.

// 25. Object Freezing
const obj5 = { a: 1 };
Object.freeze(obj5);
obj5.a = 10;
console.log(obj5.a); // 1
// Explanation: Object.freeze() prevents property modification.

// 26. JSON.stringify and Infinity
console.log(JSON.stringify({ a: Infinity })); // {"a":null}
// Explanation: Infinity is not valid JSON, so it converts to null.

// 27. Empty Array + Empty Array
console.log([] + []); // ""
// xplanation: Arrays convert to strings when used with +.

// 28: typeof with an array
console.log(typeof []);
// Explanation: Arrays are special objects in JavaScript.

// 29. Boolean of an Empty Array
console.log(!![]); // true
// Explanation: Empty arrays are truthy.

// 30. Function with Arrow vs Regular
const obj10 = {
  a: 10,
  fn1() {
    console.log(this.a);
  },
  fn2: () => {
    console.log(this.a);
  },
};
obj10.fn1(); // 10
obj10.fn2(); // undefined
// Explanation:
// fn1 uses this from obj → 10.
// fn2 (arrow function) does not bind this, so it’s undefined.

// 31 Nested Objects
const obj = { a: { b: 2 } };
const obj2 = { ...obj };
obj.a.b = 10;
console.log(obj2.a.b); // 10
// Explanation: The spread operator does shallow copy, not deep copy.

// 32. Object Property with a Number Key
const obj = { 1: "one" };
console.log(obj["1"]); // one
console.log(obj[1]); // one
//  Explanation: Object keys are always strings, so 1 and "1" are the same.

// 33. Boolean Conversion of Empty Object
console.log(!!{}); // true
// Objects are always truthy in JavaScript.

// 34. Modifying String Prototype
String.prototype.custom = function () {
  return "Hello!";
};
console.log("test".custom());
//Explanation: custom is added to the prototype of strings.

// 35. delete Operator on Object Property
const obj = { a: 1, b: 2 };
delete obj.a;
console.log(obj); // { b: 2 }
// Explanation: delete removes the property from the object.

// 35. Delete on an Array
const arr = [1, 2, 3];
delete arr[1];
console.log(arr); // [1, <1 empty item>, 3]
console.log(arr.length); // 3
// Explanation: delete removes the value but keeps the index, leaving a hole.

// 35. typeof Function
function foo() {}
console.log(typeof foo); // "function"
// Explanation: Functions have a special typeof value.

// 36. parseInt with Leading Zero
console.log(parseInt("08")); // 8
console.log(parseInt("09")); // 9
// Explanation: No octal conversion in modern JavaScript.

// 37. instanceof with Primitives
console.log("hello" instanceof String); // false
// Explanation: Primitives are not instances of their wrapper objects.

// 38. Comparing null and undefined
console.log(null == undefined); // true
console.log(null === undefined); // false
// Explanation: == allows type coercion; === does not.

// 39. Math.max() with Empty Array
console.log(Math.max()); //--Infinity
//  Explanation: No arguments return the lowest possible value.

// 40. toFixed() with Large Numbers
console.log((123.456).toFixed(1)); // "123.5"
// Explanation: Rounds to one decimal place.

// 41. isNaN Behavior
console.log(isNaN("Hello"));
// Explanation: "Hello" cannot be converted to a number.

// 42. String Addition with a Number
console.log("5" + 3); // 53
// + with a string causes concatenation.

// 43. bind() and Function Execution
const obj = { a: 1 };
function foo() {
  console.log(this.a);
}
const bound = foo.bind(obj);
bound(); // 1
// Explanation: bind explicitly sets this context.

// 44. Object.assign() Mutation
const obj1 = { a: 1 };
const obj2 = Object.assign({}, obj1);
obj2.a = 2;
console.log(obj1.a); // 1
// explaination { , __proto__: obj1}

// 45. Array.isArray(null)
console.log(Array.isArray(null)); // false
// 🔹 Explanation: null is not an array.

// 46. typeof on Symbol
console.log(typeof Symbol());
// 🔹 Explanation: Symbol is a primitive.

// 46. Empty Object in JSON.stringify()
console.log(JSON.stringify({})); // "{}"
// 🔹 Explanation: Empty object serializes normally.

// 46. Array .fill()
const arr = new Array(3).fill(5);
console.log(arr);

// 47. in Operator with Arrays
console.log(1 in [0, 5, 2]); // true
console.log(3 in [0, 1, 2]); // false
// Explanation: in checks for the index, not the value.

// 48. Number.isNaN() vs isNaN()
console.log(isNaN("Hello")); // true  (because "Hello" → NaN)
console.log(Number.isNaN("Hello")); // false (string is not NaN)
// Explanation: isNaN() coerces values; Number.isNaN() does not.

// 50. Implicit Type Conversion in Subtraction
console.log("5" - 3); // 2
// Explanation: - triggers number conversion.

// 51. Object.keys() on an Empty Object
console.log(Object.keys({})); // []
// Explanation: No enumerable properties exist.

// 52. NaN === NaN
console.log(NaN === NaN); // false
//  Explanation: NaN is never equal to anything, even itself.

// 53. Using join() on Arrays
console.log([1, 2, 3].join("-")); // "1-2-3"
//  Explanation: join() creates a string with the given separator.

// 54. length Property on Function
function foo(a, b, c) {}
console.log(foo.length); // output: 3
// Explanation: .length returns the number of function parameters.

// 55. Boolean Conversion of Empty String
console.log(Boolean("")); // false
// Explanation: "" is a falsy value.

// 56. Array.prototype.push() Return Value
const arr = [1, 2];
console.log(arr.push(3)); // 3
// Explanation: .push() returns the new length.

// 57. parseInt() with a Radix
console.log(parseInt("10", 2)); // 2
// Explanation: "10" in binary is 2.

// 58. console.log() with Multiple Values
console.log(1, 2, 3); // 1 2 3
// Explanation: console.log() can take multiple arguments.

// 59. null == false
console.log(null == false); // false
// 🔹 Explanation: null only equals undefined.

// 60 Array.prototype.concat()
console.log([1, 2].concat([3, 4])); //  1 2 3 4
// Explanation: concat() merges arrays.

// 61. this is in object method
const person = {
  name: "John",
  sayName() {
    console.log(this.name);
  },
};
const say = person.sayName;
say(); // undefined
// Explanation: say() loses the this reference.

// 61. 


