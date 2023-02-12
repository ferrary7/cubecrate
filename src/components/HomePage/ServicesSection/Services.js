import React from 'react'
import './Services.css';
import ServicesCard from './ServicesCard';

function Services() {
  return (
    <div className='servicesection'>
      <h2>How We Can Help?</h2>
      <div className='services-container flex'>
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
        <ServicesCard />
      </div>
    </div>
  )
}

export default Services
