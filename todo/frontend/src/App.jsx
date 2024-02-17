import { useState } from 'react'
import './App.css'
import { CreaeteTodo } from './components/CreateTodo'
import { ToDos } from './components/ToDo'

function App() {
  const [todos,setTodos]=useState([]);


  // fetch("http://localhost:3000/todos").then(async (res) => {
  //   const json = await res.json();
  //   setTodos(json.todos);
  // })

  return (
    
      <div>
        <CreaeteTodo></CreaeteTodo>
        <ToDos todos={todos}></ToDos>
      </div>
      
    
  )
}

export default App
