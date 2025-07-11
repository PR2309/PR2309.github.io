/* Transections

Steps :
    1> Loging a replica in a new Tab.
    2> command:
        mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/hdfc?replicaSet=rs1"
        it logs in intoa new database hdfc or create one if not present
    
    3> Add data:

    4> const session=db.getMongo().startSession(); // start a session
    session.startTransaction()

    5>
        var custCollection= session.getDatabase("hdfc").customers
        custCollection.updateOne({_id:1},{$inc:{bal:-100}})
    6>
    session.commitTransaction()
    // session.abortTransaction() //to abort transaction
    session.endSession()
    7>
    db.customers.find()
    exit

*/

// Data
[
    {_id:1,name:"John",bal:500},
    {_id:2,name:"Mike",bal:100}
]


/*************************************************************************************************/
// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/hdfc?replicaSet=rs1"

// db.customers.insertOne({_id:1,name:"John",bal:500})
// db.customers.insertOne({_id:2,name:"Mike",bal:100})
// const session = db.getMongo().startSession();
// session.startTransaction()
// var custCollection = session.getDatabase("hdfc").customers
// custCollection.updateOne({_id:1},{$inc:{bal:-100}})
// custCollection.updateOne({_id:2},{$inc:{bal:100}})
// session.commitTransaction() 
// session.endSession()
// db.customers.find()
// exit
///////////////////////////////////////
// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/hdfc?replicaSet=rs1"
// const session = db.getMongo().startSession();
// session.startTransaction()
// var custCollection = session.getDatabase("hdfc").customers
// custCollection.updateOne({_id:1},{$inc:{bal:-100}})
// // don't run this - custCollection.updateOne({_id:2},{$inc:{bal:100}})
// session.abortTransaction() 
// session.endSession()
// db.customers.find()