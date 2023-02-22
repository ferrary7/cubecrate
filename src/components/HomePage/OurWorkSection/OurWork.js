import React from 'react'
import './OurWork.css';
import OurWorkCard from './OurWorkCard';

function OurWork() {
  return (
    <div className='ourwork'>
        <h2>Our Work</h2>
        <div className='work-container flex'>
            <OurWorkCard />
            <OurWorkCard />
            <OurWorkCard />
            <OurWorkCard />
            <OurWorkCard />
        </div>
        <button className='secondary-btn'>View More</button>
    </div>
  )
}

export default OurWork
