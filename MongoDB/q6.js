// all _id fields are index in MongoDB
// it's the fastes query to get data
db.employees.getIndexes()

// creates email as an index
db.employees.createIndex({email:1})
db.employees.createIndex({email:1},{unique:true})

// removes email as an index
db.employees.dropIndex("email_1")

// 
db.employees.find({email:"jonh@gmail.com"}).explain("executionStats")


/***************************************************************************/
db.employees.getIndexes()

db.employees.createIndex({email:1})

db.employees.dropIndex("email_1")