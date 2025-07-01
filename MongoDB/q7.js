// aggregate is equivalence to find but with some extra features
db.employees.aggregate([
    // each field is called a pipeline and second pipeline will execute only after previous on is done with execution.
    {$match:{department:"IT"}}, 
    {$project:{name:1,salary:1}}
])
/* Aggregations Pipeline:
    each field inside the array is called a separate pipeline
    first it filters then applies the logic
    as it executes pipleline one after another only
*/
db.employees.aggregate([
    {$match:{department:"IT"}}, 
    {$project:{name:1,salary:1}},
    {$sort:{salary:1}},
])

db.employees.aggregate([
    {$match:{department:"IT"}},  // filters department IT
    {$project:{name:1,salary:1}}, // projects only name and salary fields
    {$sort:{salary:1}}, //sorts the result based on salary
    {$limit:3} // limits number of entities to be dispalyed
])

db.employees.aggregate([
    {$group:
        {_id:"$department", // Group by the "department" field
            total:{$sum:"$salary"} // Calculate the sum of "salary" for each department
        } // gives null if field is absent
    },
])

db.employees.aggregate([
    {$project: {name:0}}, // won't project "name" field
])

db.employees.aggregate([
    {$project: {empName:"$name"}}, // projects "name" field as "EmpName" Alias
])

db.employees.aggregate([
    {$project: {
        _id:0,
        name:1,
        salary:1,
        bonus:{$multiply:["$salary",2]} // adds a new field bonus multiplying salary by 2
    }},
])

// Question: display name, email and salary for all IT employees
db.employees.aggregate([
    {$match:{department:"IT"}},
    {$project:{_id:0,name:1,email:1,salary:1}}
])

// Question: display annual salary of all employees
db.employees.aggregate([
    {$project:{
        _id:0,
        annualSalary:{$multiply:["$salary",12]}
    }}
])

// display employees whose salary is greater than 3000 and show CTC instead of Salary field
db.employees.aggregate([
    {$match:
        {salary:{$gt:3000}}
    },
    {$project: {
        _id:0,
        name:1,
        email:1,
        CTC: {
            $multiply: ["$salary",12]
        }
    }}
])

// Calculate the Average age of Students
db.students.aggregate([
    {$group:{_id:null,avg:{$avg:"$age"}}},
])
// Update the age of the students and name "Alice Johnson" to 24
db.students.aggregate([
    {$match:{name:"Alice Johnson"}},
    {$set:{age:24}}
])
// Add new course "Chemistry" to a student's course array, only if it doesn't already exist
db.students.updateMany(
    {},
    {$addToSet:{courses:'Chemistry'}}
)
// Increment age by 1 for all enroller students
db.students.updateMany(
    {},
    {$inc:{age:1}}
)
// Return only name and age for students, excluding _id
db.students.aggregate([
    {$project:{_id:0,name:1,age:1}}
])
// Remove a course "Physics" from Alice's courses
db.students.updateOne(
    {name:"Alice Johnson"},
    {$pull:{courses:"Physics"}}
)

/*********************************************************************** */
db.employees.aggregate([
    { $match: { department: "IT" } },
    { $project: { name: 1, salary: 1 } },
    { $sort: { salary: 1 } },
    { $limit: 3 },
]);

db.employees.aggregate([
    { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([{ $project: { empName: "$name" } }]);

db.employees.aggregate([
    {
        $project: {
            _id: 0,
            name: 1,
            salary: 1,
            bonus: { $multiply: ["$salary", 2] },
        },
    },
]);

db.students.insertOne({
    name: "Alice Johnson",
    age: 23,
    courses: ["Math", "Physics"],
    enrolled: true,
});
db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

//display name,email,salary of IT employees

//display annual salary of all employees

//display employees whose salary is greater
//than 3000 and show CTC instead of Salary field

db.students.aggregate([
    { $group: { _id: null, averageAge: { $avg: "$age" } } },
]);

db.address.insertOne({
    studentId: ObjectId("685ce0ec89c4bc1576ab1d88"),
    city: "Jacksonville",
    country: "USA",
});

db.students.aggregate([
    {
        $lookup: {
            from: "address",
            localField: "_id",
            foreignField: "studentId",
            as: "address",
        },
    },
    { $unwind: "$address" },
    { $project: { name: 1, "address.city": 1, "address.country": 1 } },
]);

db.employees.aggregate([
    {$project:{name:1,location:1}},
    {$unwind:"$location"}
])