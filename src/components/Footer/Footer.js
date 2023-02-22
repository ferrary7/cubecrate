import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer flex'>
      <div className='icons flex'>
        <img className='icon' src='../../../assets/linkedin-icon.svg' alt='linkedin' />
        <img className='icon' src='../../../assets/ig-icon.svg' alt='instagram' />
        <img className='icon' src='../../../assets/mail-icon.svg' alt='email' />
      </div>
      <img className='cclogo' src='../../../assets/ccfooterlogo.svg' alt='CubeCrate' />
    </div>
  )
}

export default Footer
