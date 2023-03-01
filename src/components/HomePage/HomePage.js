import React from 'react'
import ContactForm from '../ContactForm/ContactForm'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import HeroSection from './HeroSection/HeroSection'
import OurWork from './OurWorkSection/OurWork'
import Services from './ServicesSection/Services'
import Testimonials from './Testimonials/Testimonials'

function HomePage() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <Services />
        <OurWork />
        <Testimonials />
        <ContactForm />
        <Footer />
    </>
  )
}

export default HomePage
