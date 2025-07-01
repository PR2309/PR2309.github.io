db.employees.insertOne(
    {
        name:"John smith",
        email:"johm@gmail.com",
        department:"IT",
        salary:1456,
        location:["FL","OH"],
        date:Date()
    }
)
db.employees.insertMany(
    [
    {
        name:"Mike Joseph",
        email:"mike@gmail.com",
        department:"IT",
        salary:2456,
        location:["FL","TX"],
        date:Date()
    },
    {
        name:"Cathy G",
        email:"cathy@gmail.com",
        department:"IT",
        salary:3456,
        location:["AZ","TX"],
        date:Date()
    }
]
)

db.employees.updateOne(
    {email:"john@gmail.com"},
    {$set:{salary:2000}}
)

// it'll create a field points setting value to 1 if it's not present
db.employees.updateOne(
    {},
    {$set:{points:1}}
)

// Sets points value to 2 for first entity having department field as "IT"
db.employees.updateOne(
    {department:"IT"},
    {$set:{points:2}}
)
// Increments points value by 1 for all entities having department field as "IT"
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:1}}
)
// Increments points value by -1 for all entities having department field as "IT"
db.employees.updateMany(
    {department:"IT"},
    {$inc:{points:-1}}
)


// Changing field name from score to points for all
db.employees.updateMany(
    {},
    {$rename:{points:"score"}}
)
// Removes field named score
db.employees.updateMany(
    {},
    {$unset:{score:""}}
)

// It pushes an array in a field not a single value like $set
db.employees.updateMany(
    {},
    {$push:{skills:"Java"}}
)
db.employees.updateMany(
    {},
    {$push:{skills:"Python"}}
)
db.employees.updateMany(
    {},
    {$push:{skills:"MERN"}}
)
db.employees.updateMany( //this will add "MERN" twice in the array
    {},
    {$push:{skills:"MERN"}}
)

db.employees.updateMany( // this removes all "MERN" from the array
    {},
    {$pull:{skills:"MERN"}}
)

// to add only unique elements
// won't add value if already added
// if there are already duplicates it won't do any modifications to them.
db.employees.updateMany(
    {},
    {$addToSet:{skills:"MERN"}}
)

// pop only takes the value 1 for last and -1 for first
db.employees.updateMany( // pops the first element from the array
    {},
    {$pop:{skills:-1}}
)

db.employees.updateMany( // pops the last element from the array
    {},
    {$pop:{skills:1}}
)

// Combination of update and insert
db.employees.updateOne(
    {email:"brian@gmail.com"},
    {$set:{name:"Brian"}},
    {upsert:true}
)

// similar to updateOne, if document is found, replaces the entire document
// updateOne only changes the given field 
db.employees.replaceOne(
    { name: "John" },
    { name: "John", department: "Finance", salary: 70000 },
    { upsert: true }
)

// To delete first entity department field as "IT"
db.employees.deleteOne(
    {department:"IT"}
)

// To delete all the entities having department field as "IT"
db.employees.deleteMany(
    {department:"IT"}
)