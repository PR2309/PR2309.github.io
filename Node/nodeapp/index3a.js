import http from 'http';

let server1=http.createServer((req,res)=>{
    // res.send("Server 1 is got ur request");
    res.end("Server 1 response ends");
});

server1.listen(8081,(err)=>{
    console.log(`Server 1 is running at http://localhost:8081`);
});