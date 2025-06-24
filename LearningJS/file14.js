// error handling

try{
    console.log(a);
}catch(err){
    console.log("Something went wrong");
    console.log(err);
}

const c=20;
const d=10;
try{
    // const c=2; // first error to be thrown in catch block
    d=5; 
    console.log(d);
}catch(err){
    console.log("Can't change const");
    console.log(`Error:\n${err}`);
}
console.log(c);
console.log(d);