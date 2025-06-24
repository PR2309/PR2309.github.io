// spread operators

// in Object
const marks={
    Engilsh: 20,
};
const newMarks={...marks,Maths:90};
console.log(newMarks);

let marks2={
    Engilsh: 20,
};
marks2={...marks,Maths:90};
console.log(marks2);

// in Arrays
let students=['abc','def'];
let other=['mno','pqr'];
students=[...students,'tuv','xyz',...other];
console.log(students);