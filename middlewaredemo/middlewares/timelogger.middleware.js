let timelogger=(req,res,next)=>{
    // console.log("BEFORE RQQUEST");
    // next();
    // console.log("AFTER REQUEST");
    
    let startTime=new Date();
    next();
    let endTime=new Date();
    console.log(endTime-startTime);
}
module.exports= {timelogger};