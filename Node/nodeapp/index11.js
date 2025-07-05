import express from 'express';
import jwt from 'jsonwebtoken';

const app=express();
app.listen(8080,()=>{console.log("Server is running at http://localhost:8080");});

const SECRET="sometext";

const users=[{
    email:"john@gmail.com",
    pass:1234,
    role:"admin",
},{
    email:"john@gmail.com",
    pass:1234,
    role:"user",
}];

app.use(express.json());

const authenticate=(req,res,next)=>{ // Middleware logic
    const authData=req.headers.authorization;
    if(!authData){return res.status(401).send("Token Missing");}
    const token=authData.split(" ")[1]; // [0] is Bearer [1] is signature token
    try{
        const userData=jwt.verify(token,SECRET);
        if(userData.role==="admin"){next();}
        else{return res.status(403).send("Unauthorized User");}

    }catch(err){
        res.status(401).send("Token Expired or Invalid");
    }
};

app.post("/login",(req,res)=>{
    const {email,pass}=req.body;
    const found=users.find((user)=>user.email===email && user.pass===pass);
    if(found){
        const token=jwt.sign(found,SECRET,{expiresIn:"1h"});
        res.status(200).json({user:found,token:token});
    } else {
        res.status(403).json({message:"Access Denied"});
    }
});

app.get("/users",authenticate,(req,res)=>{
    res.status(200).json(users);
});