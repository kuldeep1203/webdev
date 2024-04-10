
import { Dashboard } from './components/dashboard'
import {Landing } from './components/landing'
import './App.css'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'
function App() {
 
   
  return (
    
    <BrowserRouter>
    <Appbar/>
      <Routes>
        <Route path = "/dashboard" element={<Dashboard/>}/>
        <Route path = "/" element={<Landing/>}/>

      </Routes>
    </BrowserRouter>

   
    
  )
}

function Appbar(){
  const navigate = useNavigate();//expects to be used in a component insied browser rotuer
  <div>
      <div>
         <button onClick={()=>{
            navigate("/");
         }}>
          Landing page
         </button>
         <button onClick={()=>{
          navigate("/dashboard");
         }}>
          Dashboard
          </button>
      </div>
  </div>
}

export default App
