import React from 'react'
import './Projects.css';

function WebCard(props) {
  return (
    <div className='webcard'>
      <div className='web-image' style={{backgroundImage: 'url(' + props.image + ')'}}></div>
      <h3>{props.title}</h3>
      <p>{props.desc}</p>
      <button className='secondary-btn' onClick={() => {window.open(props.link)}}>{props.button}</button>
    </div>
  )
}

export default WebCard
