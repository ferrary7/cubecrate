import React from 'react'
import DevCard from './DevCard'
import './OurTeamSection.css';

function OurTeamSection() {
  return (
    <div className='our-team-section'>
      <h2>Our Team</h2>
      <div className='devs-container flex'>
        <DevCard
            image='../../../assets/aditya2.jpg'
            name='Aditya Anand'
            desc='Full Stack Dev'
        />
        <DevCard
            image='../../../assets/aryan.png'
            name='Aryan Sharma'
            desc='Full Stack Dev'
        />
        <DevCard
            image='../../../assets/raju.png'
            name='Raju Tukadiya'
            desc='Full Stack Dev'
        />
      </div>
    </div>
  )
}

export default OurTeamSection
