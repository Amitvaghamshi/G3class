const express=require("express");
const fs=require("fs");

const app=express();
app.use(express.json());

app.get("/todos",(req,res)=>{
    const data=fs.readFileSync("./db.json","utf-8");
    let parsed_data=JSON.parse(data);
    res.send(parsed_data.todos);
})

app.get("/todo/:id",(req,res)=>{
      const data=fs.readFileSync("./db.json","utf-8");
      const parsed_data=JSON.parse(data);
      const all_todos=parsed_data.todos;
      let todo_id=req.params.id;
      let singleTodo=all_todos.filter((el)=>{
           if(el.id==todo_id){
            return true;
           }
           return false;
      });
      res.send(singleTodo);
});


app.post("/todo/save",(req,res)=>{

    const payload=req.body;

    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data);

    parsed_data.todos.push(payload);
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("data saved");

});

app.delete("/todo",(req,res)=>{
    const todo_id=req.query.id;
    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data);
    const all_todos=parsed_data.todos;
    let new_todos= all_todos.filter((el)=>{
         if(el.id==todo_id){
              return false;
         }
         return true;
    })
    parsed_data.todos=new_todos;
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("DELETED");

})

app.patch("/toggle",(req,res)=>{
    const todo_id=req.query.id;
    const data=fs.readFileSync("./db.json","utf-8");
    const parsed_data=JSON.parse(data);
    const all_todos=parsed_data.todos;
    const new_todos=all_todos.map((el)=>{
            if(el.id==todo_id){
                el.isCompleted=!el.isCompleted;
                return el;
            }
            return el;
    });
    parsed_data.todos=new_todos;
    fs.writeFileSync("./db.json",JSON.stringify(parsed_data));
    res.send("data changed");
})


app.get("/movie",(req,res)=>{
    let movieStream=fs.createReadStream("./movie.txt","utf-8");
    movieStream.pipe(res);
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})