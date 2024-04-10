
import React, { lazy, Suspense } from 'react';
const Dashboard = lazy(()=>import("./components/dashboard"));
const Landing = lazy(()=>import("./components/landing"))

import './App.css'
import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom'


//lazy loading - incermentingly fetching the component code in bundle only when the person does mvoe to a differnt page/component 
//cuz a site may have a lot of diff pages why give the entire thing at strt instead give as he needs





function Appbar(){
  const navigate = useNavigate();//expects to be used in a component insied browser rotuer
  //use navigate makes sure that browser doesnt fetch new html everytime we move from one route to other 
  return (
      
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
  )

}



function App() {
 
   
  return (
    <div>
      <BrowserRouter>
      <Appbar/>
      <Routes>
        {/* Suspense is used for asynchronous component fetching  */}
        <Route path = "/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
        <Route path = "/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>

      </Routes>
    </BrowserRouter>

    </div>
    
   
    
  )
}



export default App
