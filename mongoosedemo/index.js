const express=require("express");
const {connection}=require("./config/db.js");
const {studentRouter}=require("./routes/student.router.js");
require('dotenv').config()
const {authenticationRouter}=require("./routes/authentication.router.js");
var jwt = require('jsonwebtoken');


const app=express();
app.use(express.json());
app.use("/students",studentRouter);

app.get("/",(req,res)=>{
      res.send("This is Home page");
})

app.use("/user",authenticationRouter);

app.get("/data",(req,res)=>{

  const token=req.headers.authorization;

  jwt.verify(token, 'abcxyz', function(err, decoded) {
       if(decoded){
         res.send("data");
       }else{
        res.send("Invalid token");
       }
  });

})

app.listen(process.env.PORT,async()=>{
    try{
      await connection;
      console.log("connected to db");
    }catch(err){
        console.log("error to connecting db");
    }
    console.log(`server is running on port ${process.env.PORT}`);
})