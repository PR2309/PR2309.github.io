// import export
// It's not recommentded to write all functions in same page.
// In Eccma script we can write funcitons in separate files and maintain easily.

import add,{substract} from "./calc.mjs"
// import {add,substract} from "./calc.mjs" // for normal export or separate export or together default export

const result1=add(5,4);
console.log(result1);

const result2=substract(5,4);
console.log(result2);