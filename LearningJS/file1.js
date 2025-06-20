//  Introduciton to JavaScript
// Single line Comments
/* 
Multiline Comments
*/

// Variables and It's types
let studentName="John";
let age=30
let promoted=true;
let score
let city=null
console.log(studentName)
console.log(typeof(studentName))
console.log(typeof age)
console.log(typeof city)
console.log(typeof score)

// Type casting (data type conversion) 
let strAge=String(age)
console.log(typeof strAge)
console.log(typeof Number(strAge))
let flag="true";
console.log(typeof Boolean(flag))

// Operators
let a1="10";
let a2=10;
console.log(a1+a2) // String concatenation
console.log(a1*a2) // automatically understands it's mathematical oprational logic and treats it as number
console.log(a1-a2) // String to number conversion
console.log(a1==a2) // Loose equality check (value only, not type)
console.log(a1===a2) // Strict equality check (type and value)
console.log(a1!=a2) // Loose inequality check
console.log(a1!==a2) // Strict inequality check
