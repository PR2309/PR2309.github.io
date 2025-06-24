// Conditionals in JavaScript
// Conditional statements allow you to execute different code blocks based on certain conditions.
let a=10
let b=12

// If-else statements
if(a>b){
    console.log(`${a} is greater than ${b}`)
}else if(a<b){
    console.log(`${a} is less than ${b}`);
}
else{
    console.log(`${a} is equal to ${b}`)
}

if(a===b) console.log(`${a} === ${b}`); // Curly braces are optional for single statements

let c
if(c) console.log("Good"); // This will not execute because c is undefined
else console.log("Bad"); // This will execute

let d=null
if(d) console.log("Good"); // This will not execute because d is null
else console.log("Bad"); // This will execute

// Ternary operator
// The ternary operator is a shorthand for if-else statements.
// It takes three operands: a condition, a result if true, and a result if false.
a>b?console.log("a is greater than b"):console.log("a is less than or equal to b");
console.log(`${a} is ${a>b?"greater than":"less than"} to ${b}`);
console.log(`${a>b?"a is greater than b":"a is less than or equal to b"}`);

// The logical AND (&&) and logical OR (||) operators can also be used to
a>b && console.log("a is greater than b"); // This will execute if a is greater than b
a<b || console.log("a is not less than b"); // This will execute if a is not less than b

// Default values
// The logical OR (||) operator can be used to provide a default value if the left
// This is useful for setting default values when a variable might be undefined or null.
let x
let value=a||10
console.log(value); // If a is truthy not equal to 0, value will be a; otherwise, it will be 10
// The nullish coalescing operator (??) can be used to provide a default value if the left-hand side is null or undefined.
let e = null;
let f = e ?? "default value"; // If e is null or undefined, f will be "default value"

// Switch statements
// The switch statement is used to execute one block of code among many based on the value of an expression.
// It is a cleaner alternative to multiple if-else statements when checking the same variable against different values.