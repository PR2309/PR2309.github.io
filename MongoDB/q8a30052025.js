
// Giving Alias
db.employees.aggregate([
    {$project: {_id:0,name:1,dept:"$department"}}
])

// Showing extra field
db.employees.aggregate([
    {$project: {_id:0,name:1,dept:"$department",Grade:"Grade A"}} // just shows Grade field don't save it
])

// Conditionals - Teranry Operator
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        dept:"$department",
        Grade:{$cond:[ // it's in the form of an array 
            {$gte:["$salary",2000]}, // Condition
            "Grade A", // If condition is true
            "Grade B" // If condition is false
        ]}
    }}
])

// Conditional - if-else Operator
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        dept:"$department",
        Grade:{$cond:{ // it's in the form of an object 
            if:{$gte:["$salary",2000]}, // Condition
            then:"Grade A", // If condition is true
            else:"Grade B" // If condition is false
        }}
    }}
])
/************************************************ */

// Add a new Field strSalary in employees
// store "2500" for all IT department
// store "1000" for other department

db.employees.updateMany({},{$set:{strSalary:{$cond:{
    if:{department:"IT"},then:"2500",else:"1000"}
}}})


// Convert operator
db.employees.aggregate([
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"$strSalary",to:"int"}}
    }},{$group:{_id:"$department",total:{$sum:"$Sal"}}},
    {$out:"depWiseSalary"}// create a new collections storing the result in it
])

db.createView(
    "depWiseSalary", // viewName
    "employees", // collectionName
    [ // details
    {$project:{
        _id:0,
        name:1,
        department:1,
        Sal:{$convert:{input:"$strSalary",to:"int"}}
    }},{$group:{_id:"$department",total:{$sum:"$Sal"}}},
    {$out:"depWiseSalary"}// create a new collections storing the result in it
])
/***************************** */

// Regex
db.employees.find({name:{$regex:"Cathy"}})

db.employees.find({name:{$regex:"cathy"}}) // but it's case-sensitive

db.employees.find({name:{$regex:"cathy",$options :"i"}}) // it's case-insensitive

db.employees.find({name:{$regex:"^C"}}) // all names begin with letter C (Captial)

db.employees.find({name:{$regex:"y$"}}) // all names ending with letter y (small)
