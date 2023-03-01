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
            <OurWorkCard image='../../../assets/logo2.svg' link='/services/logo-design' />
            <OurWorkCard image='../../../assets/triund1.png' link='/services/thumbnail-design' />
            <OurWorkCard image='../../../assets/ui3.png' link='/services/ui-design' />
            <OurWorkCard image='../../../assets/storygiri.png' link='/services/web-development' />
            <OurWorkCard image='../../../assets/thumb3.png' link='/services/video-editing' />
        </div>
        <button className='secondary-btn'  onClick={() => {Navigate('services/web-development')}}>View More</button>
    </div>
  )
}

export default OurWork
