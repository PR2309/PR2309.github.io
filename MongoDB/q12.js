/* Sharding
There are 2 types of scaling Vertical and horizontal
in replicaSet only one is wokring having loads all other are idle.
Sharding  is for load balancing primarily for huge database
*data gets distributes in different data set automatically using horizontal scaling.
Applications know the info is in which replica set on it's own.
There are a set of top level replica called "Configure replica" to manage all other replica sets
After inserting 64,000 docs mongoDb automatically start sharding.
We can set the limit manually but it's the whole purpose of the code of sharding to automatically process it
We can write on which basis we can perform sharding.
________________________      ___________________       ____________________
    |     Config Replicas    |    |   Replica Set 1   |     |   Replica Set 2    |
    |                        |    |                   |     |                    |
    |       Database conf    |    |     Database s1   |     |     Database s2    |
    |        A-Primary       |    |     C-Primary     |     |      E-Primary     |
    |        Server A        |    |      Server C     |     |      Server E      |
    |         [Data]         |    |       [Data]      |     |       [Data]       |
    |------------------------|    |-------------------|     |--------------------|
    |       Database rconf   |    |     Database s1r  |     |     Database s2r   |
    |       B-Secondary      |    |     D-Primary     |     |     F-Secondary    |
    |        Server B        |    |      Server D     |     |      Server F      |
    |         [Data]         |    |       [Data]      |     |       [Data]       |
     ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾      ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾       ‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾

    mongod commands are for databse related work
    mongos commands are for services replated work
    Steps:
        1> Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
        2> Start Config servers on separate tabs of command prompt
        3> mongod --configsvr --port 27018 --replSet cf --dbpath d:\dbshards\conf
        4> mongod --configsvr --port 27019 --replSet cf --dbpath d:\dbshards\rconf
        5> Open new tab and Initiate replica set for config servers
        6> mongosh --port 27018
        7> rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})


        // Create folder dbshards and then create sub folders: conf, rconf, s1, s1r, s2, s2r
// Start Config servers on separate tabs of command prompt
// mongod --configsvr --port 27018 --replSet cf --dbpath d:\dbshards\conf
// mongod --configsvr --port 27019 --replSet cf --dbpath d:\dbshards\rconf
// Open new tab and Initiate replica set for config servers
// mongosh --port 27018
// rs.initiate({_id:'cf',members:[{_id:0,host:'localhost:27018'},{_id:1,host:'localhost:27019'}]})
// rs.config()
// rs.status()
// ////////////////////////////////////////////
// Start Shard1 servers on separate tabs of command prompt
// mongod --shardsvr --port 27020 --replSet rs1 --dbpath d:\dbshards\s1
// mongod --shardsvr --port 27021 --replSet rs1 --dbpath d:\dbshards\s1r
// Open new tab and Initiate replica set for shard1 servers
// mongosh --port 27020
// rs.initiate({_id:'rs1',members:[{_id:0,host:'localhost:27020'},{_id:1,host:'localhost:27021'}]})
// /////////////////////////////////////
// Start Shard2 servers on separate tabs of command prompt
// mongod --shardsvr --port 27022 --replSet rs2 --dbpath d:\dbshards\s2
// mongod --shardsvr --port 27023 --replSet rs2 --dbpath d:\dbshards\s2r
// Open new tab and Initiate replica set for shard2 servers
// mongosh --port 27022
// rs.initiate({_id:'rs2',members:[{_id:0,host:'localhost:27022'},{_id:1,host:'localhost:27023'}]})
/////////////////////////
// Start Mongo Routing Service on separate tab of command prompt
// mongos  --configdb cf/localhost:27018,localhost:27019 --port 27050

// mongosh --port 27050
// sh.addShard("rs1/localhost:27020,localhost:27021")
// sh.addShard("rs2/localhost:27022,localhost:27023")
// sh.status()
// use mydatabase
// sh.enableSharding("mydatabase")
// sh.shardCollection("mydatabase.customers", { _id: 1 })
// sh.status()
// sh.getShardedDataDistribution() //run this after executing below nodejs scripts
*/