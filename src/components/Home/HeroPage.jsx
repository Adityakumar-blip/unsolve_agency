import React from 'react'
import videobg from '../../assets/videoplayback.mp4'

const HeroPage = () => {
  return (
    <div className="bg-video-wrap">
    <video src={videobg} autoPlay loop muted>
    </video>
    <div className="overlay">
    </div>
    <h1 className='title-heading'>
        Brand Issues?
        Contact Us 
    </h1>
  </div>
  )
}

export default HeroPage