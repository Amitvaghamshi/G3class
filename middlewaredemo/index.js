const express=require("express");
const fs=require("fs");
var cors = require('cors')
const {studentRouter}=require("./routers/student.router");
const {todoRouter}=require("./routers/todos.router");

const {timelogger}=require("./middlewares/timelogger.middleware");
const {messagelogger} =require("./middlewares/messagelogger.middleware");
const app=express();

// INBUILT MIDDLEWARE
app.use(express.static("./public"));
//http://localhost:3000/css/index.css


// CUSTOM MIDDLEWARE
app.use(timelogger);
app.use(messagelogger);
app.use(cors());
app.use("/student",studentRouter);
app.use("/todos",todoRouter);





// app.use((req,res,next)=>{
//     console.log("1");
//     next();
//     console.log("2");
// })

// app.use((req,res,next)=>{
//     console.log("3");
//     next();
//     console.log("4");
// })

// app.get("/",(req,res)=>{
//     console.log("INSIDE HOME PAGE");
//     res.send("THIS IS HOME PAGE");
// })

// app.get("/about",(req,res)=>{
//     console.log("INSIDE ABOUT PAGE");
//     res.send("THIS IS ABOUT PAGE");
// })

// app.use((req,res,next)=>{
//     console.log("INSIDE MIDDLEWARE");
//     next();
// })

// app.get("/contact",(req,res)=>{
//     console.log("INSIDE CONTACT PAGE");
//     res.send("THIS IS CONTACT PAGE");
// })

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})