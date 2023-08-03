import React from 'react'
import headerLogo from '../assets/unsolve.png'
import { Link } from 'react-router-dom'

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
          <li><Link to="/">Home</Link></li>
          <li><Link to="/works">Works</Link></li>
          <li><Link to="/serviceas">Services</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header