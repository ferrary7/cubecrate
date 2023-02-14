import React from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar flex'>
      <Link to='/'><div className='logo flex'>
        <img src='../../../assets/cclogo.svg' alt='logo' />
        CubeCrate
      </div></Link>
      <div className='navlinks flex'>
        <a  href='#services'><p>Services</p></a>
        <p>About Us</p>
        <a  href='#contactus'><p>Contact Us</p></a>
      </div>
    </div>
  )
}

export default Navbar
