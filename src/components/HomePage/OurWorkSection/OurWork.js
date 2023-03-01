import React from 'react'
import { useNavigate } from 'react-router-dom';
import './OurWork.css';
import OurWorkCard from './OurWorkCard';

function OurWork() {
  const navigate = useNavigate();

  function Navigate(route) {
    navigate('/' + route);
    console.log('/' + route);
    window.scrollTo(0, 0);
  }

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
        <button className='secondary-btn'  onClick={() => {Navigate('services/web-development')}}>View More</button>
    </div>
  )
}

export default OurWork
