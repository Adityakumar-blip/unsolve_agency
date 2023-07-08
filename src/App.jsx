import { useState } from 'react'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header'
import Expertise from './components/Home/Expertise'
import Quote from './components/Home/Quote'
import WhatWeDo from './components/Home/WhatWeDo'
import Cube from './utils/RandomSymbols'
import Clients from './components/Home/Clients'
import OurWorks from './components/Home/OurWorks'
// import RandomSymbols from './utils/RandomSymbols'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Quote />
      <WhatWeDo />
      <OurWorks />
      <Expertise />
      {/* <Cube/> */}
      {/* <RandomSymbols/> */}
      {/* <Clients/> */}
      <Footer />
    </>
  )
}

export default App
