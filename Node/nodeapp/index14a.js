// # Databasse
// to used database with Node and Express we need a package named "mongoose"
import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import bcrypt, { hashSync, compareSync } from 'bcrypt';
import jwt from 'jsonwebtoken';

const app=express();
const PORT=process.argv[2] || 8080;
const SECRET="mySecretKey";

// Routes
// Router is used manage the hug number of apis into separate files in an organized manner
const userRouter=express.Router();
app.use('/api',userRouter); // for user related APIs
app.use('/api',productRouter); // for Products related APIs

mongoose.connect("mongodb://localhost:27017/lpu1") // creates a database named lpu1
.then( () =>{ // returns a promise
    app.listen(PORT,(err)=>{ // first connect to database then run the server
        if(err){console.log(`Something went wrong,\n Error:\n${err}`);}
        else{console.log(`Server is running at http://localhost:${PORT}`);}
    });
});

// models > userModel
const userSchema=mongoose.Schema({ // defining Structure 
    name:{type:String},
    email:{type:String,unique:true},
    password:{type:String},
    role:{type:String}
},{timestamps:true}); // save creation and updation date & time

const userModel=mongoose.model("User",userSchema); // name of collection in lowercase with s at end User -> users,

// connection checking
userRouter.get("/",(req,res)=>{
    res.send("MongoDB Connected");
})

app.use(express.json());
// registering
// 
userRouter.post("/register",async (req,res)=>{
    try{
        const{name,email,password,role}=req.body;
        const hashedPwd=hashSync(password,10);
        const user={name,email,password:hashedPwd,role};
        const result= await userModel.create(user);
        res.status(201).json(result);
    } catch (err){
        res.status(400).json({message:"Something went wrong", error: err});
    }
});

// middlewares
const authenticate= (req,res,next)=>{
    try{
        const token=req.headers.authorization;
        const auth=jwt.verify(token.split(" ")[1],SECRET);
        if(auth){
            // res.status(200).json({message:"Authentic User"});
            req.user=auth; // storing data of authentic user
            next();
        }else{
            return res.status(403).json({message:"Unauthentic user or Token expired"});
        }
    }catch(err){
        return res.status(401).json({message:"Invalid token"});
    }
};
const authorize = (role)=>{
    return (req,res,next)=>{
        if(req.user && req.user.role===role){
            // res.status(200).json({message:"Authorized User"});
            next();
        }else{
            return res.status(403).json({message:"Unauthorized, access denied"});
        }
    }
}

// Fetching all users list
userRouter.get("/user",authenticate, authorize("admin"),async(req,res)=>{
    try{
        const usersList=await userModel.find();
        res.status(200).json(usersList);
    }catch(err){
        res.status(400).json({message:"Somethign went wrong", error:err});
    }
});

// login
userRouter.post("/login",async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await userModel.findOne({email});
        if (!user) {return res.status(404).json({ message: "User not found" });}
        const flag2= bcrypt.compareSync(password,user.password);
        if(flag2){
            const userObj={
                name:user.name,
                email:user.email,
                role:user.role,
            }
            const token=jwt.sign(userObj,SECRET,{expiresIn:'1h'});
            res.status(200).json({message:"Login successfull",user,token});
        }else{res.status(403).json({message:"Invalid credentials"});}
    } catch (err){
        res.status(403).json({message:"Authentication Failed", error:err});
    }
});