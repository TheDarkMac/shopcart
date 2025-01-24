import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticleCard } from './components/ArticleCard'
import { Cart } from './components/Cart'
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
      <Cart/>
    </div>
    <div className='articleList'>

      <ArticleCard  articleImage={imageURL} articlePrice={2} articleDescription='awda'/>
      <ArticleCard articleName='nom' articleImage={imageURL} articlePrice={2} articleDescription='awda'/>
      <ArticleCard articleName='nom' articleImage={imageURL} articlePrice={2} articleDescription='awda'/>
    </div>
    </>
  )
}

export default App
