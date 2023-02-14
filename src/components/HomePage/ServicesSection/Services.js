import React from 'react'
import './Services.css';
import ServicesCard from './ServicesCard';

function Services() {
  return (
    <div className='servicesection' id='services'>
      <h2>How We Can Help?</h2>
      <div className='services-container flex'>
        <ServicesCard
          icon='../../../assets/web-dev-icon.svg'
          title='MERN stack development'
          desc='Custom website design and development services that deliver responsive websites tailored to your business needs.'
          route='projects'
        />
        <ServicesCard
          icon='../../../assets/ui-design-icon.svg'
          title='UI Design'
          desc='User interface design that creates engaging and intuitive experiences for your users, elevating your brand and improving user engagement.'
          route='projects'
        />
        <ServicesCard
          icon='../../../assets/logo-design-icon.svg'
          title='Logo Design'
          desc='Professional logo design that captures the essence of your brand and sets you apart from the competition.'
          route='projects'
        />
        <ServicesCard
          icon='../../../assets/video-editing-icon.svg'
          title='Video Editing'
          desc='High-quality video editing services that help you tell your brand’s story and connect with your audience through engaging visuals and compelling storytelling.'
          route='projects'
        />
        <ServicesCard
          icon='../../../assets/thumbanail-design-icon.svg'
          title='Thumbnail Design'
          desc='Eye-catching thumbnail designs that help your videos stand out in a crowded online space.'
          route='projects'
        />
      </div>
    </div>
  )
}

export default Services
