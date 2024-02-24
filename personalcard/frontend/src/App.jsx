import { useState } from 'react'
import './App.css'
import * as Bootstrap from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
 

  return (
    <>
      <div >

        <h1 className="heading">Welcome</h1>
        
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px'  }}>
      <Bootstrap.Card style={{ width: '18rem',align: 'center' }}>
      <Bootstrap.Card.Body>
        <Bootstrap.Card.Title>Card Title</Bootstrap.Card.Title>
        <Bootstrap.Card.Subtitle className="mb-2 text-muted">Card Subtitle</Bootstrap.Card.Subtitle>
        <Bootstrap.Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Bootstrap.Card.Text>
        <Bootstrap.Button variant="primary">Card Button</Bootstrap.Button> {/* Button 1 */}
          <Bootstrap.Button variant="secondary" className="ml-2">Another Button</Bootstrap.Button> {/* Button 2 */}
      </Bootstrap.Card.Body>
      </Bootstrap.Card>
      </div>
      
    
    </>
  )
}

export default App
