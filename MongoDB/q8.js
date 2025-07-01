// To access data from 2 databases
//  db1 - students, db2 - address 
db.students.aggregate([
    {$lookup:{
        from: "address", // The foreign collection to join with (i.e., "address" collection)
        localField: "_id", // Field from the "students" collection to match (usually the primary key)
        foreignField: "studentId", // Field from the "address" collection to match against localField
        as: "address" // Name of the new array field to add to each student document containing matched address(es)
    }},
    {$project:{
        name:1
    }}
])

db.students.aggregate([
    {$lookup:{
        from: "address", // The foreign collection to join with (i.e., "address" collection)
        localField: "_id", // Field from the "students" collection to match (usually the primary key)
        foreignField: "studentId", // Field from the "address" collection to match against localField
        as: "address" // Name of the new array field to add to each student document containing matched address(es)
    }},
    {$unwind:"$address"},
    {$project:{
        name:1
    }}
])

db.students.aggregate([
    {$lookup:{
        from: "address", // The foreign collection to join with (i.e., "address" collection)
        localField: "_id", // Field from the "students" collection to match (usually the primary key)
        foreignField: "studentId", // Field from the "address" collection to match against localField
        as: "address" // Name of the new array field to add to each student document containing matched address(es)
    }},
    {$unwind:"$address"}, // used to break array and form it's elements into separate object
    {$project:{
        name:1, // shows local db field name
        "address.city":1, // shows foreign db (address collection's) city field
        "address.country":1 // shows foregin db (address collection's) country field
    }}
])

db.students.aggregate([
    {$unwind:true},
    {$project:{
        name:1,
        _id:1,
        courses:1
    }}
])