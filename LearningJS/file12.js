// var
var a=10;
if(10>5){
    var a=20;
}
console.log(a);

// let
let b=10;
if(10>5){
    let b=20;
}
console.log(a);

const c=20;
const d=10;
try{
    const c=2; // first error to be thrown in catch block
    d=5;
}catch(err){
    console.log("Can't change const");
    console.log(`Error:\n${err}`);
}
console.log(c);
console.log(d);