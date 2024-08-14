const fs=require("fs");

let messagelogger=(req,res,next)=>{
    const message= `${req.method} request is made on url ${req.url} on time (${new Date()})`;
    console.log(message);
    fs.appendFileSync("./logger.txt",message+"\n");
    next();
}
module.exports={messagelogger}