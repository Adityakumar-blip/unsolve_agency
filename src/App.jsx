import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Expertise from './components/Home/Expertise'
import Quote from './components/Home/Quote'
import WhatWeDo from './components/Home/WhatWeDo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Quote/>
    <WhatWeDo/>
    <Expertise/>
    </>
  )
}

export default App
