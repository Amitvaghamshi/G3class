const express=require("express");
var jwt = require('jsonwebtoken');

const {UserModel}=require("../model/user.model.js")

const authenticationRouter=express.Router();


authenticationRouter.post("/signup" , async (req,res)=>{
    const {name , email , password , mobile}= req.body;
    try{
        const user=new UserModel({name,email,password,mobile});
        await user.save();
        res.send("user info saved");
    }catch(err){
        //console.log(err);
        res.send("something went wrong");
    }
})

authenticationRouter.post("/login",async(req,res)=>{
       const {email ,password}=req.body;
       try{
           const user=await UserModel.find({email,password});
           if(user.length>0){
               var token = jwt.sign({ class:"g3" }, 'abcxyz');
               res.send({message:"Login success" , token:token });
           }else{
               res.send("wrong credentials");
           }
       }catch(err){
         res.send("something went wrong");
       }
})

module.exports={authenticationRouter};