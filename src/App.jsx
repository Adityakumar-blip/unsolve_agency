import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
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
    <Footer/>
    </>
  )
}

export default App
