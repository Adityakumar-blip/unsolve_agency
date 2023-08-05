import React from 'react'
import headerLogo from '../assets/unsolve.png'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <a href="/" className="logo">
        <img src={headerLogo} alt="" height={50} width={50} />
      </a>

      <input class="menu-icon" type="checkbox" id="menu-icon" name="menu-icon" />
      <label for="menu-icon"></label>
      <nav class="nav">
        <ul class="pt-5">
          <li><Link className='links' to="/">Home</Link></li>
          <li><Link className='links' to="/works">Works</Link></li>
          <li  ><Link className='links' to="/serviceas">Services</Link></li>
          <li ><Link className='links' to="/about">About</Link></li>
          <li><Link className='links' to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header