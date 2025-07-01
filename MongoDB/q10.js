/*
~> Backup for MongoDB:
https://www.mongodb.com/try/download/database-tools

after download and installation, set enviroment variable path for it's bin folder
"C:\Program Files\MongoDB\Tools\100\bin"

mongodump -d deatabaseName -o path

-d:for database paramenter name
-o: output whenere we  have to dump the backup

to restore:
mongorestore -d databaseName "path_of_backup"

~> Improved Alternative for backup: ( Replica Set )
    Backup takes too much time having a huge downtime for large databases.
    There's a data folder inside server folder of mongodb, containing all the data.

     ________________________      ___________________       ____________________
    |       Database A       |    |     Database B    |     |     Database C     |
    |       A-Secondary      |    |     B-Primary     |     |     C-Secondary    |
    |        Server A        |    |      Server B     |     |      Server C      |
    |         [Data]         |    |       [Data]      |     |       [Data]       |
     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾      ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾       ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
    If server B is down it'll automatically make A or C as primary server.
    If server B gets up again it remains secondary until currect primary server is down.
    If all servers get down then we have backup.
    We do the write (and other) operations in primary server and let secondary servers to pull data(replica). for load balancing.
    If databse is too big we can manually do read operations in other replica server for load balancing.
    All the operations get written by mongoDB internally (not manually) from replica sets.

    - Steps to create an enviroment withing local device:
        1> Create a folder mongo-replica and subfolders data1 data2 data3
            data1, data2, data3 will act like different servers.
        2> Open command prompt and start running servers on separate tabs
            running different servers parallely.
        2.1> Add Enviroment Variable Path (if commands are not recognized)
            Set path of bin folder inside server folder in enviroment Variable.
            "C:\Program Files\MongoDB\Server\7.0\bin"
        3>To start mongoDB servers in different ports manually
            command:
                mongod -replSet rs1 -logpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data1\1.log" --dbpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data1" --port 27018
                mongod -replSet rs1 -logpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data2\2.log" --dbpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data2" --port 27019
                mongod -replSet rs1 -logpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data3\3.log" --dbpath "E:\Programs\MERN\PR2309.github.io\MongoDB\mongo-replica\data3" --port 27020

*********************************************************************************************************
                mongod -replSet rs1 -logpath "mongo-replica\data1\log1.lo"--dbpath "
                rs1 : name of replica set 
                        it shall be same for all servers to work together.
                1.log stores log of first server
                data1 stores the data.
*********************************************************************************************************
        4> Configure the replica Set
            As all 3 servers are running but we don't have primariy or secondary.
            We need to loging and initiate replicaSet to make one primary.
            Open new cmd tab and login one of theses server (first one here).
            command:
                mongosh --port 27018
        5> Initiate replicaSet.
            command:
                rs.initiate({
                    _id:"rs1", members:[{
                        _id:0,
                        host:"127.0.0.1:27018"
                    },{
                        _id:1,
                        host:"127.0.0.1:27019"
                    },{
                        _id:2,
                        host:"127.0.0.1:27020"    
                    }]
                })
            In real life port 27018 is IP of the server.
        6> rs.config() // to check the config, to view the current replica set configuration of a node.
        7> rs.status() // to check which is primary server
        8> Now connect using full path to the desired server
            mongosh mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1
        9> after creating collections and adding data to it check other server by connecting it in new tabs
            mongosh --port 27019
            mongosh --port 27020

        
        10> db.getMongo().setReadPref("secondary") //to make it read from secondary server
        11> to hide a replicaSet:
                let config = rs.conf();
                config.members[1].hidden = true;
                rs.reconfig(config);


~> Transections Implementations due to Transitions:
    We use replica Sets to implement transections by replication first. 


// Regex

*/
/************************************************************************************************************************************************/
// Create a folder mongo-replica and sub folders data1 data2 and data3

// Open command prompt and start running servers on separate tabs

// mongod -replSet rs1 -logpath "d:\mongo-replica\data1\1.log" --dbpath "d:\mongo-replica\data1" --port 27018

// mongod -replSet rs1 -logpath "d:\mongo-replica\data2\2.log" --dbpath "d:\mongo-replica\data2" --port 27019

// mongod -replSet rs1 -logpath "d:\mongo-replica\data3\3.log" --dbpath "d:\mongo-replica\data3" --port 27020

// Follow these instructions to configure replica set:

// mongosh --port 27018

// rs.initiate({_id:"rs1",members:[{_id:0,host:"127.0.0.1:27018"},{_id:1,host:"127.0.0.1:27019"},{_id:2,host:"127.0.0.1:27020"}]})

// rs.config()  //to check the config
// rs.status()

// Use mongosh command with the following connection string and the primary server will automatically get connected:


// mongosh "mongodb://localhost:27018,localhost:27019,localhost:27020/?replicaSet=rs1"

// show dbs
// use mytestdb
// db.createCollection("customers")
// db.customers.insertOne({name:"John"})

// Check secondary servers. Check both the servers if data is replicated
// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// mongosh --port 270xx
// Secondary will start, can read but cannot write
// db.getMongo().setReadPref("secondary")  //or rs.secondaryOk()
// use mytestdb
// db.customers.find() – will work now

// Shutdown primary server and the primary will be automatically changed to one of the other two servers
// Go to primary 270xx
// Use admin
// db.shutdownServer() 
// ----------------------
// Now go to secondary servers 270xx or 270xx, and type show dbs…you would notice that one of the servers will be changed to primary automatically
// ----------------------------
// Open new tab and start previous primary 270xx again
// mongod -replSet rs1 -logpath d:\mongo-replica\data1\1.log --dbpath d:\mongo-replica\data1\ --port 270xx
// Open another tab and run mongosh. You will observe that it is now a secondary server.
// mongosh --port 270xx