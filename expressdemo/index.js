const express=require("express");
const fs=require("fs");
const path=require("path");

const app=express();
//MIDDLEWARE
app.use(express.json());

app.get("/home" , (req  ,res   )=>{
    res.end("This is HOMEPAGE");
} );

app.get("/about" , (req,res)=>{
    res.send("THIS IS ABOUT PAGE");
})

app.get("/contact",(req,res)=>{
    res.send("This is contact page");
})

app.get("/students",(req,res)=>{
    const data= fs.readFileSync("./db.json",{encoding:"utf-8"});
   
    let parsed_data=JSON.parse(data);
    res.send(parsed_data.students);
})


//https://www.npmjs.com/package/nodemon
//https://www.google.com/search?q=url+with+query&rlz=1C1CHBF_enIN1013IN1014&oq=url+with+query&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABiABDIICAIQABgWGB4yCAgDEAAYFhgeMggIBBAAGBYYHjIICAUQABgWGB4yCAgGEAAYFhgeMggIBxAAGBYYHjIICAgQABgWGB4yCAgJEAAYFhge0gEINTg0NmowajSoAgCwAgA&sourceid=chrome&ie=UTF-8

app.get("/teachers",(req,res)=>{
    const data= fs.readFileSync("./db.json",{encoding:"utf-8"});
   
    let parsed_data=JSON.parse(data);
    res.send(parsed_data.teachers);
})

app.get("/student",(req,res)=>{
    const roll= req.query.roll;
    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data);
    let students=parsed_data.students;
    console.log(students);

    for(let i=0;i<students.length;i++){
        let student=students[i];
        if(student.roll==roll){
            res.send([student]);
            break;
        }
    }
    res.send([]);
})



app.post("/student/save",(req,res)=>{
      let student=  req.body
      let data=fs.readFileSync("./db.json","utf-8");
      let parsed_data=JSON.parse(data);
      parsed_data.students.push(student);

      console.log(parsed_data);

      fs.writeFileSync("./db.json", JSON.stringify(parsed_data));
      res.send("STUDENT SAVED!!");
})

app.delete("/student/delete/:roll",(req,res)=>{
    let roll=req.params.roll;
    let data=fs.readFileSync("./db.json","utf-8");
    let parsed_data=JSON.parse(data);
    let students=parsed_data.students;
    let new_students=  students.filter((el)=>{
        if(el.roll!=roll){
            return true;
        }else{
            return false;
        }
    })
    parsed_data.students=new_students;
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("student deleted");
})


app.put("/update" ,(req,res)=>{
    let roll=req.query.roll;
    let new_student=req.body;
    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data);
    const students=parsed_data.students;

    let new_students=students.map((el)=>{
        if(el.roll==roll){
          return  new_student;
        }
        return el;
    })
    parsed_data.students=new_students;
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("STUDENT UPDATED");
})


app.get("/getfile",(req,res)=>{
    res.sendFile(path.join(__dirname,"/public/index.html"));
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})