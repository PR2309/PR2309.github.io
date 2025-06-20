function greet(student) {
    console.log(`Hello ${student}`);
}
greet("John"); // This will log "Hello John"

function add(a,b){
    return a + b; // This function returns the sum of a and b
}
console.log(add(4,5)); // This will log 9

function add(){
    console.log(arguments); // This will log the arguments passed to the function
    console.log(arguments.length); // This will log the arguments passed to the function
}
add(4,5,6,7,3,4); // This will log the arguments passed to the function