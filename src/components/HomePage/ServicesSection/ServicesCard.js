import React from 'react'
import { useNavigate } from 'react-router-dom'
import './ServicesCard.css'

function ServicesCard(props) {
  const navigate = useNavigate();

  function Navigate(route) {
    navigate('/' + route);
    console.log('/' + route);
    window.scrollTo(0, 0);
  }

  return (
    <div className='services-card'>
      <img src={props.icon} alt='icon' />
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button className='secondary-btn' onClick={() => {Navigate(props.route)}}>View Details</button>
    </div>
  )
}

export default ServicesCard
