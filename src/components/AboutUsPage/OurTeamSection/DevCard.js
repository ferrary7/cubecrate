import React from 'react'
import './DevCard.css'

function DevCard(props) {
  return (
    <div className='dev-card flex'>
      <div className='dev-image' style={{backgroundImage: 'url(' + props.image + ')'}}></div>
      <p className='name'>{props.name}</p>
      <p>{props.desc}</p>
      <div className='icons flex'>
        <img src='../../../assets/yt-icon.svg' alt='YouTube' />
        <img src='../../../assets/linkedin-icon.svg' alt='LinkedIn' />
        <img src='../../../assets/ig-icon.svg' alt='Instagram' />
        <img src='../../../assets/mail-icon.svg' alt='Email' />
      </div>
    </div>
  )
}

export default DevCard
