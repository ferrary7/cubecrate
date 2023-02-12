import React from 'react'
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='herosection flex'>
      <div>
        <h1>Innovative solutions for your online success.</h1>
        <p>Whether you need a new logo, a revamp of your existing website, a completely custom UI design, or a video edit for your business, CubeCrate has got you covered. <br /><br />Our team combines technical knowledge with a keen eye for design to create visually stunning and user-friendly solutions that help businesses stand out.</p>
        <button className='primary-btn'>Contact Us</button>
      </div>
      <img src='../../../assets/illustration.svg' alt='dev-illustration' />
    </div>
  )
}

export default HeroSection
