// Callback Funcitons
// Callback functions are functions that are passed as arguments to other functions.
// They are often used in asynchronous programming, where a function is executed after another function has completed its task.
// They allow you to define a function that will be executed at a later time, once a certain condition is met or an event occurs.
// This is particularly useful in scenarios like event handling, asynchronous operations, and functional programming.

// Example 1
// In this example, we define a function `f1` that logs a message to the console.
// We then define a function `main` that takes a callback function as an argument and calls it.
// Finally, we call `main` and pass `f1` as the callback function.
let f1=()=>{
    console.log("This is function f1");
};

let main = (x) => {
    x(); // Calling the callback function passed as an argument
};

main(f1); // Passing f1 as a callback to main

// Example 2
// In this example, we define a function `main2` that logs a message to the console.
// We then call `main2` and pass an anonymous function as a callback.
// This anonymous function will be executed when `main2` calls the callback.
let main2 = (x) => {
    console.log("This is main2 function");
    x(); // Calling the callback function passed as an argument
}
main2(() => {
    console.log("This is an anonymous function passed as a callback to main2");
});