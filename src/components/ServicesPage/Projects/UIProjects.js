import React from 'react'
import './Projects.css'

function UIProjects() {
  return (
    <div className='ui-projects services'>
        <h2>UI Design</h2>
        <p>User interface design that creates engaging and intuitive experiences for your users, elevating your brand and improving user engagement.</p>
        <div className='cards-container flex'>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui1.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui2.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui3.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui4.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui5.png)'}}></div>
            <div className='card' style={{backgroundImage: 'url(../../../assets/ui7.png)'}}></div>
        </div>

        <h2>Pricing</h2>
        
    </div>
    
  )
}

export default UIProjects
