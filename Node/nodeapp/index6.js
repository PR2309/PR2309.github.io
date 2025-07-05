import express from 'express';

const app=express();

app.listen(8080,(req,res)=>{
    console.log(`Server running at http://localhost:8080`);
});


app.use(express.json()); // middleware to capture and parse the json request

// GET is used to get data from somewhere (server generally)
app.get("/",(req,res)=>{
    res.send("Data sent");
});
// POST MEthos is used to send data to the server
app.post("/",(req,res)=>{
    res.send(req.body);
});