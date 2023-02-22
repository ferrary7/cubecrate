import React from 'react'
import './Projects.css'

function LogoProjects() {
  return (
    <div className='logo-projects services'>
        <h2>Logo Design</h2>
        <p>Professional minimalist logo design that captures the essence of your brand and sets you apart from the competition.</p>
        <div className='cards-container flex'>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo1.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo2.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo3.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo4.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo5.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo6.svg)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo7.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo8.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo9.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/logo10.png)'}}></div>
        </div>
        <h2>Pricing</h2>
        
    </div>
    
  )
}

export default LogoProjects