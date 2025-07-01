// clouser
// A closure in JavaScript is when a function remembers and has access to variables from its outer scope, even after that outer function has finished running.

function main(){
    let b=1;
    function sub(){
        return b++;
    }
    return sub;
}
let f1=main();
console.log(f1()); // f1 will store what sub function will return...
console.log(f1());
console.log(f1());