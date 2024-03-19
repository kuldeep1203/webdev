import React, { useState } from 'react';
import './App.css';

// function Hwb() {
//   const [title, setTitle] = useState("kuldeep");

//   function updateTitle() {
//     setTitle("my name is " + Math.random());
//   }

//   return (
//     <div>
//       <button onClick={updateTitle}>Click me to change the title</button>
//       <Header title={title} />
//     </div>
//   );
// }

let counter=4;

function App() {
  const [todos,setTodos]=useState([{
    id:1,
    title:"gym",
    description:"go to gym"
  },{
    id:2,
    title:"cook",
    description:"lunch"
  },{
    id:3,
    title:"code",
    description:"harkirat"
  }])

  function addTodo(){
    setTodos([...todos,{
      id:counter++,
      title:Math.random(),
      description:Math.random()
    }]);
  }
  //keys helps react to knwo which is which suppose u sort the array or add or delete 
  //it will be helpful for react 
  return (
    <div>
      <button onClick={addTodo}>Add to do</button>
      {todos.map(todo=><Todo key={todo.id} title={todo.title} description={todo.description}/>)}
    </div>
  );
}

function Todo({title,description}){
  return <div>
    <h1>{title}</h1>
 
  <h5>
    {description}
  </h5>
  </div>
}


// function Header({ title }) {
//   return <div>{title}</div>;
// }

export default App;
//a state varaible inside a component changes then that component rerenders
//you need to minimize the number of rerenders to make a highly optimal react app
//you can use memo which only renders the component if it has a dynamic variable which is changing
//if a parent re renders then all children rerender given u havent used memo 
//doenst matter much but matters when buuild a mobile native app 