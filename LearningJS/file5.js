// Funcitons
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
