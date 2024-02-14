import { useState } from 'react'
import './App.css'
//JSX is a coding standard that allows users to use JavaScript expressions and other HTML features inline. 
// //to do{
//   todos:[{title:,desc:,completed:}]
// }

function App() {
  const [todos, setTodos] = useState([{
    title:"go to gym",
    description:"from 6- 9",
    completed: false,
  }, {
    title:"study dsa",
    description:"from 9-12",
    completed: false,
  }])
  
  //we need to define it like this for react to watch it 
  //usestate hook is used to define a state so react can watch the variable
  return (
    
      <div>
        
          {/* we write js components in curly brace so the above thing is a function definded in curly braces  */}
          {/* updates the state variable react handles with updation of the dom */}
          {
            todos.map(function(todo){
              return <Todo title={todo.title} description = {todo.description} />
            })
          }
          
        
    
      </div>
     
    
  )
}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}

export default App
