import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {imageURL as iURL} from './api/imageAPI.js';
function App() {
  const [count, setCount] = useState(0);
  const [imageURL, setImageURL] = useState("");
  useEffect(()=>{
    setImageURL(iURL())
  },[])
  return (
    <>
    <div>
    </div>
    <div className='articleList'>
 </div>
    </>
  )
}

export default App
