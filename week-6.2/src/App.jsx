import { useState} from 'react';
import {useEffect} from 'react';

import './App.css'


//useeffect has a function to run and a dependency array 
//sum-server.100xdevs.com/todos

//Some components need to synchronize with external systems.
// For example, you might want to control a non-React component 
//based on the React state, set up a server connection, or send an analytics log when a component appears on the screen. 
//Effects let you run some code after rendering so that you can synchronize your component with some system outside of React.


function App() {
  const [todos,setTodos] = useState([]);
  useEffect(()=>{
    setInterval(()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then(async (res)=>{
        const json =await res.json();
        setTodos(json.todos);
      })
    },1000)
    
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
