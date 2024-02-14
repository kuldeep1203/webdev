const express = require('express');
const zod  = require('zod');
const app = express()
const { todo } = require('C:\\Users\\kulu1\\webdev\\todo\\backend\\db.js');
const { createware,updateware,checkava } = require('C:\\Users\\kulu1\\webdev\\todo\\backend\\middleware.js')
// import {createware} from '/middleware.js';
// import {updatetodo} from '/middleware.js';
const port =3000;

app.use(express.json())
app.listen(port,()=>{
    console.log(`listening on port${port}`)
});
app.post("/todo",createware,async function(req,res){
    
    const title = req.body.title;
    const description = req.body.description;
    const a = await todo.create({
        title,
        description,
        completed: false
    })
    if(a){
        res.json({
            msg:"to do created"
        })
    }
    else {
                res.status(411).json({
                    message: "failed to create"
                })
            }
    
})

app.get("/todos", async function(req, res) {
    const todos = await todo.find();
    res.json({ todos });
});

app.put("/marked",updateware,checkava,async function(req,res){
    try{
        await todo.findOneAndUpdate({
            title:req.body.id
        },{
            completed:true
        })
        res.json({msg : 'update completed'})
    }
    catch(err){
        console.log(err)
        res.json({msg:'failed'})
    }
   
})


// app.listen(port,({
    
// }));