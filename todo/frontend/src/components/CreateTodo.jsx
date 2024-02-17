import { useState } from 'react'
export function CreaeteTodo(){
    
    const [title,setTile] = useState("");
    const [description,setDescription] = useState("");

    return <div>
        <input style={{
            padding:10,
            margin:10
        }} type = "text" placeholder ="title" onChange={(e) =>{
            const value = e.target.value;
            setTile(e.target.value)
        }}></input>
        <br></br>
        <input style={{
            padding:10,
            margin:10
        }} type = "text" placeholder ="description" onChange={(e) =>{
            const value = e.target.value;
            setDescription(e.target.value)
        }}></input>
        <br></br>
        <button style={{padding:10, margin:10}}
         onClick={()=>{
            fetch("http://localhost:3000/todo",{
                method : "POST",
                body:JSON.stringify({
                    title: title,
                    description: description
                }),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(async function(res){
                const json = await res.json();
                alert("todo added");
            })
         }}
        >ADD a todo</button>
    </div>
}