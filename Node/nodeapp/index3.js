import http from 'http'; // http Module

// creates a server sending request and fetching response
let server1=http.createServer((req,res)=>{});
// It will recieve req but not give any response as there's no code of response.

let server=http.createServer((req,res)=>{
    // Works in Express.js only
    // res.send("Request Recieved..."); // response sends sending this message
    res.end("Last Request Recieved..."); // response ends here sending this message
});

// server will start on port 8080
server.listen(8080,()=>{
    console.log(`Server Started at http://localhost:8080`);
});