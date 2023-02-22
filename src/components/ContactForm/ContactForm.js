import React from 'react'
import './ContactForm.css';

function ContactForm() {
  return (
    <div className='contactform flex' id='contactus'>
        <h2>Let's Connect!</h2>
      <form>
        <p>Your Name</p>
        <input placeholder='Name' />
        <p>Your Email</p>
        <input placeholder='mail@website.com' />
        <p>Message</p>
        <textarea className='message' />

        <br />
        <button className='primary-btn' type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
