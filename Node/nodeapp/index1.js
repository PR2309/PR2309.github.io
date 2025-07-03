/*
// // Start
// console.log("Hello World");

// // Normal code
// function add(a,b){
//     return a+b;
// }
// const result=add(4,5);
// console.log(result);

// Modularizing this file
// calc.js file will become a module
// it won't do anything on it's own, but we use it in other files
// it's (module's) purpose it to make debugging maintainnance and management, by keep all the funcions inside it to keep the code clean.
// Modules create by user are custom modules
// Modules come with node js themsleves are called in-built modules.
// Node.js has a lot of in-built module making task easier.
*/
import add from "./calc.js";
const result=add(4,5); // will give error as add is not defined unless we import the funcition add from calc.js
console.log(result);