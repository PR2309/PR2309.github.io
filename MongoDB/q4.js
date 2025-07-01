// Complex Queries

db.users.find({},{age:23})
db.users.find({},{age:{$eq:23}}) // $eq: means equal to.
db.users.find({},{age:{$gt:23}}) // $gt: means greater than.
db.users.find({},{age:{$gte:23}}) // $gte: means greater than or equal to.
db.users.find({},{age:{$lt:23}}) // $lt: means less than.
db.users.find({},{age:{$lte:23}}) // $lte: means less then or equal to.
db.users.find({},{age:{$ne:23}}) // $ne: means not equal to.

// in find function we pass two arguments filter and projections
// first one is the filteration condition
// second one is for projections (what to be displayed)
db.users.find({age:{$ne:23}},{name:1}) 
db.users.find({age:{$ne:23},_id:{$eq:ObjectId("685b806992eeeea6e4748a61")}},{name:1}) 

// display the highest paid employees
db.employees.find().sort({salary:-1}).limit(2);

db.user.find(
    {$and:[
        {age:{$gte:23}},
        {name:"John"}
    ]}
) // check both conditions like Logical AND
// default was Logical OR