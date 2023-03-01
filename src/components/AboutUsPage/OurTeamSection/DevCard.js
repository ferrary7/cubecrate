import React from 'react'
import './DevCard.css'

function DevCard(props) {
  return (
    <div className='dev-card flex'>
      <div className='dev-image' style={{backgroundImage: 'url(' + props.image + ')'}}></div>
      <p className='name'>{props.name}</p>
      <ul>
        {props.desc.map(function(item){
          return <li>{item}</li>
        })}
      </ul>
      <div className='icons flex'>
        {props.yt !== undefined ? <img src='../../../assets/yt-icon.svg' alt='YouTube' onClick={() => {window.open(props.yt)}} /> : null }
        {props.linkedin !== undefined ? <img src='../../../assets/linkedin-icon.svg' alt='LinkedIn' onClick={() => {window.open(props.linkedin)}} /> : null}
        {props.ig !== undefined ? <img src='../../../assets/ig-icon.svg' alt='Instagram' onClick={() => {window.open(props.ig)}} /> : null}
        {props.email !== undefined ? <img src='../../../assets/mail-icon.svg' alt='Email' onClick={() => {window.open(props.email)}} /> : null}
      </div>
    </div>
  )
}

export default DevCard
