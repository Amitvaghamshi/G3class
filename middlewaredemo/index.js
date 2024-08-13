const express=require("express");
const app=express();

// app.use((req,res,next)=>{
//     // console.log("BEFORE RQQUEST");
//     // next();
//     // console.log("AFTER REQUEST");
    
//     let startTime=new Date();
//     next();
//     let endTime=new Date();
//     console.log(endTime-startTime);
// });



app.get("/",(req,res)=>{
    console.log("INSIDE HOME PAGE");
    res.send("THIS IS HOME PAGE");
})

app.get("/about",(req,res)=>{
    console.log("INSIDE ABOUT PAGE");
    res.send("THIS IS ABOUT PAGE");
})

app.use((req,res,next)=>{
    console.log("INSIDE MIDDLEWARE");
    next();
})

app.get("/contact",(req,res)=>{
    console.log("INSIDE CONTACT PAGE");
    res.send("THIS IS CONTACT PAGE");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})