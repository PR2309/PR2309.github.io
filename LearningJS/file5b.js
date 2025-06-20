// Arrow Functions
// Arrow functions are a more concise way to write functions in JavaScript.
// They do not have their own `this` context, which makes them useful for certain situations, especially when working with callbacks or methods that need to maintain the context of `this`.
// They are defined using the `=>` syntax.
// Arrow functions can be used in place of regular functions, and they can also have implicit returns for single-expression bodies.
// They are particularly useful for short functions or when you want to preserve the context of `this` in a callback.

// Hoisting can't be applied in arrow functions, so they must be defined before they are called.

// Normal Function
function abc1(a, b) {
    return a + b; // This function returns the sum of a and b
}
// Alternate method to define a function
const abc2 = function(a, b) {
    return a + b; // This function returns the sum of a and b
}
const abc3 = (a, b) => {
    return a + b; // This function returns the sum of a and b
} 
// Calling the functions
console.log(abc1(4, 5)); // This will log 9
console.log(abc2(4, 5)); // This will log 9
console.log(abc3(4, 5)); // This will log 9

let addArrow = (a, b) => a + b; // This is an arrow function that returns the sum of a and b
console.log(addArrow(4, 5)); // This will log 9

let greetArrow = student => console.log(`Hello ${student}`); // This is an arrow function that logs a greeting
greetArrow("John"); // This will log "Hello John"

let greetWithDefault = (student = "Guest") => console.log(`Hello ${student}`); // This is an arrow function with a default parameter
greetWithDefault(); // This will log "Hello Guest"
greetWithDefault("Alice"); // This will log "Hello Alice"