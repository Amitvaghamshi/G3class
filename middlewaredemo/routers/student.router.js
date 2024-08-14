const express=require("express");

const studentRouter=express.Router();

studentRouter.get("/",(req,res)=>{
    res.send("ALL STUDENTSS");
})
studentRouter.get("/1",(req,res)=>{
    res.send("STUDENT WITH ID 1");
})

studentRouter.delete("/delete",(req,res)=>{
    res.send("STUDENT DELETED");
})

module.exports={studentRouter};