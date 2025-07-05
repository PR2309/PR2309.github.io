import express from 'express';

const app=express();

const logger=(req,res,next)=>{
    req.message="Logger";
    next();
};

// // before moving formward  first it'll call logger function only after that it'll move to other route.
// // It's like a filteration middleware
// // it''ll work fisrt no matter what.
// app.use(logger);

app.get("/",(req,res)=>{
    res.send(`Message:\n${req.message}\n`);
});

app.get("/products",logger,(req,res)=>{ //custom middleware runs only when that rout is called
    res.send(`Message:\n${req.message},\nProduct List...`)
});


app.listen(8080,()=>{
    console.log(`Server is running at http://localhost:8080`);
});