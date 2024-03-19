import React, { useState } from 'react';
import './App.css';

function Hwb() {
  const [title, setTitle] = useState("kuldeep");

  function updateTitle() {
    setTitle("my name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Click me to change the title</button>
      <Header title={title} />
    </div>
  );
}

function App() {
  return (
    <div>
      <Hwb />
      <Header title="kuldeep" />
    </div>
  );
}

function Header({ title }) {
  return <div>{title}</div>;
}

export default App;
//a state varaible inside a component changes then that component rerenders
//you need to minimize the number of rerenders to make a highly optimal react app
//you can use memo which only renders the component if it has a dynamic variable which is changing
//if a parent re renders then all children rerender given u havent used memo 
//doenst matter much but matters when buuild a mobile native app 