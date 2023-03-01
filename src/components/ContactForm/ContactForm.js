import React from 'react'
import './ContactForm.css';

function ContactForm() {
  return (
    <div className='contactform flex' id='contactus'>
        <h2>Let's Connect!</h2>
      <form action="mailto:imadityaanand24@gmail.com" method="post" enctype="text/plain">
        <p>Your Name</p>
        <input name='name' placeholder='Name' />
        <p>Your Email</p>
        <input name='mail' placeholder='mail@website.com' />
        <p>Message</p>
        <textarea name='message' className='message' />

        <br />
        <button className='primary-btn' type='submit'>Send Message</button>
      </form>
    </div>
  )
}

export default ContactForm
