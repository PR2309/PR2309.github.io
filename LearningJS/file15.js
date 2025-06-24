// JSON (JavaScript Object Notation)
// Before JSON we used to have XML
// stringify and parse methods are used the most

// Example
let data={
    "name":"Abc",
    "age":25,
    "isStudent":true,
    "skills":["HTML","CSS","JavaScript"],
    "address":{
        "city":"abc",
        "pin":"123"
    }
}

const student={
    name:"asd",
    age:21
};
const jsonStr=JSON.stringify(student);
console.log(jsonStr);

const student2='{"name":"asd","age":21}';
const newStudent2=JSON.parse(student2);
console.log(newStudent2);
console.log(newStudent2.name);