// Running servers on different ports using one file
import express from 'express';
const app=express();
const PORT=process.argv[2];

app.get("/",(req,res)=>{
    res.send(`Hello from port:${PORT}`);
});

app.listen(PORT,(err)=>{
    if(err){
        console.log("Something went wrong\nError:\n");
    }else{
        console.log(`Server is running at http://localhost:${PORT}`);
    }
});