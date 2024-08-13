const express=require("express");
const app=express();
const fs=require("fs");

let timelogger=(req,res,next)=>{
    // console.log("BEFORE RQQUEST");
    // next();
    // console.log("AFTER REQUEST");
    
    let startTime=new Date();
    next();
    let endTime=new Date();
    console.log(endTime-startTime);
}
app.use(timelogger);

let logger=(req,res,next)=>{
    const message= `${req.method} request is made on url ${req.url} on time (${new Date()})`;
    console.log(message);
    fs.appendFileSync("./logger.txt",message+"\n");
    next();
}
app.use(logger);

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

app.get("/",(req,res)=>{
    console.log("INSIDE HOME PAGE");
    res.send("THIS IS HOME PAGE");
})

app.get("/about",(req,res)=>{
    console.log("INSIDE ABOUT PAGE");
    res.send("THIS IS ABOUT PAGE");
})

// app.use((req,res,next)=>{
//     console.log("INSIDE MIDDLEWARE");
//     next();
// })

app.get("/contact",(req,res)=>{
    console.log("INSIDE CONTACT PAGE");
    res.send("THIS IS CONTACT PAGE");
})

app.listen(3000,()=>{
    console.log("server is running on port 3000")
})