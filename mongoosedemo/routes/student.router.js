const express=require("express");
const {StudentModel}=require("../model/student.model.js");

const studentRouter=express.Router();

studentRouter.post("/add",async(req,res)=>{
    const payload=req.body;
    try{
      let student=new  StudentModel(payload);
      await student.save();
      res.send("STUDENT SAVED");
    }catch(err){
      res.send("Something went wrong");
    }
})

studentRouter.get("/",async(req,res)=>{
   try{
      let data=await StudentModel.find();
      res.send(data);
   }catch(err){
     res.send("something went wrong");
   }
})

studentRouter.delete("/delete/:id",async(req,res)=>{
   const {id} =req.params;
   try{
        const student=await StudentModel.findByIdAndDelete({_id:id});
        if(student==null){
          res.send("student is not found with id "+id);
        }else{
          res.send(student.name +" is deleted");
        }
   }catch(err){
     res.send("something went wrong");
   }
})

studentRouter.put("/update/:id",async(req,res)=>{
  const {id}=req.params;
  const payload=req.body;
  try{
    await StudentModel.findByIdAndUpdate(id , payload);
    res.send("student updated");
  }catch(err){
    res.send("something went wrong");
  }
})

module.exports={studentRouter};