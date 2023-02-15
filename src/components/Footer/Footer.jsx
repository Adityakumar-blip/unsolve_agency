import React from 'react'
import logoImg from '../../assets/UNSOLVED.png'

const Footer = () => {
  return (
    <div className="footer-container">
        <div className="left-container">
            <img src={logoImg} alt='unsolved_logo' width="200px" height="60px" />
            <div className="newsletter">
                <h4 style={{color:"white"}} >Join newsletter, for latest update</h4>
                <input type='text' placeholder="Enter Your Email" />
            </div>
        </div>
        <div className="right-container">

        </div>
    </div>
  )
}

export default Footer