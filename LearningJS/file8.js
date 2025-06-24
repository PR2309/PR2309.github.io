// Objects
const student = {
    name:"John",
    age: 20,
};
console.log(student); // This will log the student object

console.log(student.name); // This will log "John"
console.log(student["name"]); // This will log "John"

console.log(student.age); // This will log 20
console.log(student["age"]); // This will log 20

// Adding a new property to the object
student.grade = "A"; // This will add a new property 'grade' to the student
console.log(student.grade); // This will log "A"

// Modifying an existing property
student.age = 21; // This will modify the existing property 'age'
console.log(student.age); // This will log 21

// Deleting a property from the object
delete student.name; // This will delete the property 'name' from the student object
console.log(student.name); // This will log 'undefined' because the property 'name' has been deleted

// Checking if a property exists in the object
console.log("age" in student); // This will log true because the property 'age' exists in the student object
console.log("name" in student); // This will log false because the property 'name' has been deleted

// Object.keys() method
const keys=Object.keys(student); // This will return an array of the keys in the student object
console.log(keys); // This will log ["age", "grade"]

// Object.values() method
const values=Object.values(student); // This will return an array of the values in the student object
console.log(values); // This will log [21, "A"]

// Iterating over the properties of an object
for (let key in student) {
    console.log(`${key}: ${student[key]}`); // This will log each key-value pair in the student object
}
