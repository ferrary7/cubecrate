import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import AboutMainSection from './MainSection/AboutMainSection'
import OurTeamSection from './OurTeamSection/OurTeamSection'

function AboutUs() {
  return (
    <>
        <Navbar />
        <AboutMainSection />
        <OurTeamSection />
        <ContactForm />
        <Footer />
    </>
  )
}

export default AboutUs
