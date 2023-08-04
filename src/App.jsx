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

// ** routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Mainpage from './components/Home/Mainpage'
import AboutUs from './components/About/AboutUs'
import Contact from './components/Contact/Contact'

function App() {

  return (
    <>
      <Router>
      <Header />
        <Routes>
          <Route exact path='/' Component={Mainpage} />
          <Route path='/about' Component={AboutUs} />
          <Route path='/contact' Component={Contact} />
        </Routes>
      <Footer />
      </Router>
    </>
  )
}

export default App
