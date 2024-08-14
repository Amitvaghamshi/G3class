const express=require("express");
const todoRouter=express.Router();

todoRouter.get("/",(req,res)=>{
    res.send("ALL TODOS");
})
todoRouter.get("/1",(req,res)=>{
    res.send("TODO WITH ID 1");
})
todoRouter.patch("/toggle",(req,res)=>{
    res.send("TOGGLED");
})

module.exports={todoRouter};