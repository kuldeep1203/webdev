import { useState, useEffect, useMemo } from 'react';
import './App.css';
import  { Ghub }   from 'C:\\Users\\kulu1\\webdev\\react_things\\src\\components\\github.jsx';
function App() {
  const [color, setColor] = useState('');
  const [length, setLength] = useState(0);
  const [data,setData] = useState();
  const [userData,setUserData] = useState('kuldeep1203');
  const words = useMemo(() => ['Lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit', 'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore', 'magna', 'aliqua.'], []);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);


  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${userData}`);
        if (response.ok) {
          const data1 = await response.json();
          setData(data1);
        } else {
          console.error('Failed to fetch user data:', response.status);
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, [userData]);



  const generateParagraph = useMemo(() => {
    const numWords = parseInt(length);
    return Array.from({ length: numWords }, () => words[Math.floor(Math.random() * words.length)]).join(' ');
  }, [length, words]);

  return (
    <div>
    <div className="container">
      <button onClick={() => setColor("red")}>red</button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}>blue</button>
      <button onClick={() => setColor("black")}>black</button>

      <input type="number" value={length} onChange={(e) => setLength(e.target.value)} />
      <p>{generateParagraph}</p>
    </div>
    <br/>
    <div className="containerg">
      <input type="text"  onChange={(e) => setUserData(e.target.value)} />
      <br/>
      <Ghub userData={data} />
    </div>
    
    </div>
  );
}

export default App;


