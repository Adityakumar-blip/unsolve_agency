import React from 'react'
import Quote from './Quote'
import WhatWeDo from './WhatWeDo'
import OurWorks from './OurWorks'
import Expertise from './Expertise'
import HeroPage from './HeroPage'

const Mainpage = () => {
  return (
    <>
    <HeroPage/>
      <Quote />
      <WhatWeDo />
      <OurWorks />
      <Expertise />
    </>
  )
}

export default Mainpage