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
          <li><a href="/">Home</a></li>
          <li><a href="/works">Works</a></li>
          <li><a href="/serviceas">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header