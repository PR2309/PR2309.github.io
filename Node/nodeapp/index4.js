import express from "express";

/*
// Server won't have anything to serve
const appX=express();

appX.listen(8090,()=>{
    console.log(`Server is running at http://localhost:8090`);
});

*/
const app=express();

// APIs
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/productsDemo",(req,res)=>{
    res.send("Product List");
});

// Handling dynamic urls
app.get("/ab*cd",(req,res)=>{ // anything between ab and cd will appear here
    res.send("Hello");
});

// Sending JSON Response
app.get("/products",(req,res)=>{
    // res.send("Product List");
    res.json({id:1,name:"Product 1",price:25});
});

// Static and Dynamic URL with parameters
app.get("/name",(req,res)=>{ // it'll accept only name as value after http://localhost:8080/
    res.send("Good Morning");
});
// it'll accept any value after http://localhost:8080/
app.get("/:name",(req,res)=>{ // eg: http://localhost:8080:abc
    // res.send("Good Morning");
    res.send(`Good Morning ${req.params.name}`);
});
// Passing more than one parameter in Dynamic URL
app.get("/:name/:age",(req,res)=>{ // eg: http://localhost:8080/abc/52
    res.send(`Hello my name is ${req.params.name}, and my age is ${req.params.age}`);
});
// mixed dynamic link
app.get("/:name/age/:age",(req,res)=>{ // eg: http://localhost:8080/abc/age/52
    res.send(`Hello my name is ${req.params.name}, and my age is ${req.params.age}`);
});

// getting authorizations token from header
app.get("/authorization",(req,res)=>{
    res.send(req.headers.authorization);
});

// query string
app.get("/query",(req,res)=>{ //https:localhos:8080/?name=john
    res.send(`Name: ${req.query.name}`);
});
app.get("/query2",(req,res)=>{ //https:localhos:8080/?name=john&age=21
    res.send(`Name: ${req.query.name}, Age: ${req.query.age}`);
});

// Requests:
// GET Request
app.get("/",(req,res)=>{ //http://localhost:8080
    res.send("Hello World");
});
// POST Request
app.post("/",(req,res)=>{ //http://localhost:8080
    res.send("Hello World");
});
// PUT (UPDATE) Request
app.put("/",(req,res)=>{ //http://localhost:8080
    res.send("Hello World");
});
// DELETE Request
app.delete("/",(req,res)=>{ //http://localhost:8080
    res.send("Hello World");
});
// PATCH Request
app.patch("/",(req,res)=>{ //http://localhost:8080
    res.send("Hello World");
});



app.listen(8080,()=>{
    console.log(`Server is running at http:localhost:8080`);
});