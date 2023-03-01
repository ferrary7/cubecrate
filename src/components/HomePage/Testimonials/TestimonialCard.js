import React from 'react'
import './Testimonials.css';

function TestimonialCard(props) {
  return (
    <div className='testimonial-card flex'>
        <div className='client-image' style={{backgroundImage: 'url(' + props.image + ')'}}>
        </div>
        <div>
            <p className='review'>{props.review}</p>
            <p className='client'>{props.name}, {props.company}</p>
        </div>
    </div>
  )
}

export default TestimonialCard
