import { useState} from 'react';
import {useEffect} from 'react';

import './App.css'


//useeffect has a function to run and a dependency array 
//sum-server.100xdevs.com/todos
function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    fetch("https://sum-server.100xdevs.com/todos")
    .then(async (res)=>{
      const json =await res.json();
      setTodos(json.todos);
    })
  },[]);

  return <div>
      {todos.map(todo => (
        <Todo key={todo.id} title={todo.title} description={todo.description}/>
      ))}
      
    </div>
  
  
}
function Todo({title, description}){
  return (
  <div>
    <h1>
      {title}
    </h1>
    <h5>
      {description}
    </h5>
  </div>
  )
}

// function CardWrapper({children}){
//   return <div style={{border : "2px solid black"}}>
//     {children}
//   </div>
// }

export default App
//hooks allow u to hook into thereact state and lifecylce features from fucntion components
