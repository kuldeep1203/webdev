//propdrilling

import React, { useState, createContext, useContext } from 'react';
import './App.css'
import { CountContext} from './context';

function App() {
  const [count ,setCount]=useState(0);
 
  return (
    <>
     {/* //wrap anyone that wants to use the teleported value inside a provide */}
    <CountContext.Provider value={count}>
      <Count setCount={setCount}/>
    </CountContext.Provider>
     
      
      
    </>
  )
}


function Count({setCount}){//count doesnt really need it but button componenet does so it is paassing it down 
  //this  passing of props can cause a lot of drilling down which is called prop drilling can be fixed using context api
  //if u use context api it lets a parent componet
  //provide data to the entire tree below it 
  
  return <div> 
    <CountRender />
    
    <Buttons setCount={setCount}/>
  </div>
  //count would rerender even though we are not using count variable here 
  //context api does ahve this drawback  
  //so why do we exactly use context api ??? - we dont use it to make rendering more performant 
  //only reason we use it for making the syntax cleaner and get rid of prop drilling
  //to combat the issue of rerendering we use state management libraries 
  //statemanagement  provides a cleaner way to store the state of your app
  // recoil,redux,zustand - helps to divide project into state and components
  // Recoil 
}


function CountRender(){
  const count = useContext(CountContext);
  return <div> 
      {count}
     </div>
} 


function Buttons({setCount}){
  const count = useContext(CountContext);
  return (
    <div> 
     <button onClick={()=>{
      setCount(count+1)
     }}>
      Increase
     </button>
     <button onClick={()=>{
      setCount(count-1)
    }}> 
    Decrease
    </button>
    </div>
  )
  
}

export default App
