// const mongoose =require("mongoose");

// async function main(){
//     try{
//         const connection= await mongoose.connect("mongodb://127.0.0.1:27017/moongoosedemo");

//         // await StudentModel.insertMany([{roll:"123",marks:455}]);
//         let student=new StudentModel({name:"akshit",marks:245,roll:30});
//         await student.save();

//         console.log("STUDENT SAVED");

//         mongoose.disconnect();
//     }catch(err){
//         console.log(err);
//     }
// }

// main();

// const studentSchema=mongoose.Schema({
//     name:{type:String, required:true },
//  //   email:{type:String, required:true , unique:true},
//     roll:Number,
//     marks:Number
// },{
//     versionKey:false
// })

// const StudentModel=mongoose.model("student",studentSchema);


const mongoose=require("mongoose");

const connection=mongoose.connect("mongodb://127.0.0.1:27017/studentInfo");

module.exports={connection};