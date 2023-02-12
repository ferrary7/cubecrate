import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar flex'>
      <div className='logo flex'>
        <img src='../../../assets/cclogo.svg' alt='logo' />
        CubeCrate
      </div>
      <div className='navlinks flex'>
        <p>Services</p>
        <p>About Us</p>
        <p>Contact Us</p>
      </div>
    </div>
  )
}

export default Navbar
