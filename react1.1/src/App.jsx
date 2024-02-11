import { useState } from 'react'
import './App.css'
//JSX is a coding standard that allows users to use JavaScript expressions and other HTML features inline. 
function App() {
  const [count, setCount] = useState(0)//we need to define it like this for react to watch it 

  return (
    
      <div>
        <button onClick={()=> setCount((count)=>count +1)} >
          count is {count}
          {/* updates the state variable react handles with updation of the dom */}
        </button>
    
      </div>
     
    
  )
}

export default App
