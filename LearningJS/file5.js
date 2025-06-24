// Regular Funcitons
function greet(){
    console.log("Good Morning!!!");
}
greet(); // Calling the function greet

// Immediately Invoked Function Expression (IIFE) Method
(function hello(){
    console.log("Hello, World!");
})(); // This function is executed immediately after it is defined

// hoisting
// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// This means you can use variables and functions before they are declared in the code.
// However, only the declarations are hoisted, not the initializations.
hoistedFunction(); // This will work because the function declaration is hoisted
function hoistedFunction() {
    console.log("This function is hoisted!");
}

// Variable hoisting
// Variable declarations are also hoisted, but their initializations are not.
// This means you can reference a variable before it is declared, but its value will be `undefined` until the line where it is initialized is executed.
console.log(x); // This will log 'undefined' because x is hoisted but not yet assigned a value
x=10; // This will work because variable declarations are hoisted, but the assignment is not
console.log(x); // This will throw an error because x is not defined yet
var x=10;


function greet(student) {
    console.log(`Hello ${student}`);
}
greet("John"); // This will log "Hello John"

function add(a,b){
    return a + b; // This function returns the sum of a and b
}
console.log(add(4,5)); // This will log 9

function add2(){
    console.log(arguments); // This will log the arguments passed to the function
    console.log(arguments.length); // This will log the arguments passed to the function
}
add2(4,5,6,7,3,4); // This will log the arguments passed to the function

console.log(typeof greet); // This will log "function" because greet is a function
console.log(greet.length); // This will log the number of parameters the function expects, which is 1 in this case
console.log(add2.length); // This will log the number of parameters the function expects, which is 0 in this case