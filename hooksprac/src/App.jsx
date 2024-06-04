import { useEffect } from 'react'

import './App.css'

function App() {
  

  return (
    <>
    <MyComponent/>
      
    </>
  )
}
function MyComponent() {
  // const [count, setCount] = useState(0);

  // const incrementCount = () => {
  //   setCount(count + 1);
  // };

  // return (
  //   <div>
  //     <p>{count}</p>
  //     <button onClick={incrementCount}>Increment</button>
  //   </div>
  // );
  useEffect(()=>{
    console.log("component mounted");

    return()=>{
      console.log("component unmounted");
    }
  },[]);

  return <div>
    from inside my component
  </div>


}
export default App
