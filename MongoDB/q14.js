// User Management in MongoDB
// Authentications, Admin User with root access.

/*
Steps:
    1> command:
        use admin
    2> create a admin user, command:
        db.createUser({user:"admin",pwd:"admin",roles:[{role:"root",db:"admin"}]})
    3> to get all users, commands:
        db.getUser()
    4> Enable Security in file: "C:\Program Files\MongoDB\Server\7.0\bin\mongod.cfg"
        and add thes lines:
            security:
                authorization: enabled
        if not getting saved rety as Admin
    5> restart mongodb service:
        go to services and look for mongodb
        right click, then restart
    6> login to mongodb
        It won't allow to acces data now.
    7> Login to mongoDb as admin everytime to access data, command:
            mongosh --username admin --authenticationDatabase DatabasName
        then enter password : admin (here)
    
*/

/* Creating a read only user
    use databaseName
    db.createUser({user:"user1",pwd:"1234",roles:[{role:"read",db:"PEPDB"}]})
    login to mongodb with user1
        mongosh --username user1 --authenticationDatabase PEPDB
*/