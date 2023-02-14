import React, { useState } from 'react'
import './Testimonials.css';
import testimonials from './Data';

function Testimonials() {
    const numData = testimonials.length;
    const [slide, setSlide] = useState(0);

    function LeftClick() {
        if(slide === 0) {
            setSlide(numData - 1);
        } else {
            setSlide(slide - 1);
        }
    }

    function RightClick() {
        if(slide === numData - 1) {
            setSlide(0);
        } else {
            setSlide(slide + 1);
        }
    }

    return (
        <div className='testimonials'>
            <h2>What Our Clients Say</h2>
            <div className='testimonials-container flex'>
                <div className='arrow flex' onClick={LeftClick}><img src='../../../assets/left-arrow.svg' alt='left' /></div>
                <div className='testimonial-card flex'>
                    <div className='client-image' style={{backgroundImage: 'url(' + testimonials[slide].image + ')'}}>
                    </div>
                    <div>
                        <p className='review'>{testimonials[slide].review}</p>
                        <p className='client'>{testimonials[slide].name}, {testimonials[slide].company}</p>
                    </div>
                </div>
                <div className='arrow flex' onClick={RightClick}><img src='../../../assets/right-arrow.svg' alt='right' /></div>
            </div>
        </div>
    )
}

export default Testimonials
