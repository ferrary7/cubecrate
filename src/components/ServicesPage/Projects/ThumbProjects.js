import React from 'react'
import './Projects.css';

function ThumbProjects() {
  return (
    <div className='thumb-projects services'>
      <h2>Thumbnail Design</h2>
      <p>Eye-catching thumbnail designs that help your videos stand out in a crowded online space.</p>
      <div className='cards-container flex'>
        <div className='card' style={{backgroundImage: 'url(../../../assets/triund1.png)'}}></div>
        <div className='card' style={{backgroundImage: 'url(../../../assets/amritsar1.png)'}}></div>
        <div className='card' style={{backgroundImage: 'url(../../../assets/triund2.png)'}}></div>
        <div className='card' style={{backgroundImage: 'url(../../../assets/amritsar2.png)'}}></div>
        <div className='card' style={{backgroundImage: 'url(../../../assets/podcast1.png)'}}></div>
        <div className='card' style={{backgroundImage: 'url(../../../assets/triund3.png)'}}></div>
      </div>
    </div>
  )
}

export default ThumbProjects
