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
            desc={['UI Designer', 'Logo Designer']}
            yt='https://www.youtube.com/imadityaanand'
            linkedin='https://www.linkedin.com/in/imadityaanand/'
            ig='https://www.instagram.com/imadityaanand/'
        />
        <DevCard
            image='../../../assets/aryan.png'
            name='Aryan Sharma'
            desc={['Front-end Developer', 'Video Editor']}
            linkedin='https://www.linkedin.com/in/ferrary7/'
            ig='https://www.instagram.com/pixelhub.community/'
        />
        <DevCard
            image='../../../assets/raju.png'
            name='Raju Tukadiya'
            desc={['Back-end Developer', 'Thumbnail Designer']}
            yt='https://www.youtube.com/@rajutk'
            linkedin='https://www.linkedin.com/in/rajutk/'
            ig='https://www.instagram.com/rajutk9/'
        />
      </div>
    </div>
  )
}

export default OurTeamSection
