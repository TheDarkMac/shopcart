import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ArticleCard } from './components/ArticleCard'
import { Cart } from './components/Cart'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <Cart/>
    </div>
    <div className='articleList'>

      <ArticleCard articleName='nom' articleImage='url' articlePrice={2} articleDescription='awda'/>
      <ArticleCard articleName='nom' articleImage='url' articlePrice={2} articleDescription='awda'/>
      <ArticleCard articleName='nom' articleImage='url' articlePrice={2} articleDescription='awda'/>
    </div>
    </>
  )
}

export default App
