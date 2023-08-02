import React from 'react'
import './About.css'

const AboutUs = () => {
  return (
    <div className='about-main'>
       <div className="believe">
        <h2 className='believe-heading'>What we believe in.</h2>
       
       </div>
       <div className="believe-para">
          <div className="believe-para-one">
            <h5 className='design'>Design</h5>
            <p className='design-para' >At Unsolved Solutions, we create captivating designs that leave a lasting impression. Our team of talented artists crafts visuals that speak to your brand's essence and capture your audience's attention. From concept to execution, we ensure uniqueness and originality in every stroke.</p>
          </div>
          <div className="believe-para-two">
            <h5 className='development'>Development</h5>
            <p className='development-para'>Unsolved Solutions brings your ideas to life with cutting-edge technology and seamless development. We build robust and scalable solutions that adapt to your business needs, pushing boundaries and redefining industry standards.</p>
          </div>
          <div className="believe-para-three">
            <h5 className='dignity'>Dignity</h5>
            <p className='dignity-para'>At Unsolved Solutions, we value respect and integrity in every interaction. We listen to your aspirations, maintain confidentiality, and treat you with the utmost professionalism. With us, your journey is honored with dignity and trust.</p>
          </div>
        </div>
    </div>
  )
}

export default AboutUs