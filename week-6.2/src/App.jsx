import React, { useState, memo } from "react";
import { useCallback } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const logSomething=useCallback(() => { 
    console.log("child clicked");
  },[]);

  return (
    <div>
      <ButtonComponent inputFunction={logSomething} />
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Click me {counter}</button>
    </div>
  );
}

const ButtonComponent = memo(({ inputFunction }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={inputFunction}>Button Clicked</button>
    </div>
  );
});

export default App;


