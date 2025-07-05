import http from 'http';

let server2=http.createServer((req,res)=>{
    // res.send("Server 2 is got ur request");
    res.end("Server 2 response ends");
});

server2.listen(8082,(err)=>{
    console.log(`Server 2 is running at http://localhost:8082`);
});