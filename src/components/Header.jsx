import React from 'react'
import headerLogo from '../assets/unsolve.png'
import blcl_logo from '../assets/unsolved.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
  const location = useLocation()
  return (
    <div>
      <Link to="/" className="logo">
        <img src={location.pathname == '/contact' ? blcl_logo : headerLogo} alt="" height={50} width={50} />
      </Link>

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