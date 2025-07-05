// # Command Line arguments
// returns undefined if arguments not given

let name="John";
let name2=process.argv[2];
console.log("Name "+name); // Rpints only value of variable name="John"
console.log("Name "+name2); // takes the 3rd command line argument, as first is the file name

console.log(`Hello ${name2} and  ${process.argv[3]}`); 

console.log(process.argv[1]); // gives path of file (path & file name)

console.log(process.argv[0]); // gives path of node.exe file as first argument is node command

console.log(process.argv.length); // gives the count of total arguments passed

let name0=process.argv[3] || "Default Name";
console.log(name0); // takes name from 4th argument passed in command line or if not passed then deault value as " Default Name"