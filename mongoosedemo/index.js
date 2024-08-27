const express=require("express");
const {connection}=require("./config/db.js");
const {StudentModel}=require("./model/student.model.js");

const app=express();
app.use(express.json());

app.get("/",(req,res)=>{
      res.send("This is Home page");
})


app.post("/students/add",async(req,res)=>{
      const payload=req.body;
      try{
        let student=new  StudentModel(payload);
        await student.save();
        res.send("STUDENT SAVED");
      }catch(err){
        res.send("Something went wrong");
      }
})



app.listen(3000,async()=>{
    try{
      await connection;
      console.log("connected to db");
    }catch(err){
        console.log("error to connecting db");
    }

    console.log("server is running on port 3000");
})