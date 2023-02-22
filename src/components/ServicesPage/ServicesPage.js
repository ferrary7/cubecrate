import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import LogoProjects from './Projects/LogoProjects'
import ThumbProjects from './Projects/ThumbProjects'
import UIProjects from './Projects/UIProjects'
import VideoProjects from './Projects/VideoProjects'
import WebProjects from './Projects/WebProjects'
import ServicesBar from './ServicesMainSection/ServicesBar'

function ServicesPage(props) {
  return (
    <>
      <Navbar />
      <h2>Services</h2>
      <ServicesBar class={props.page} />
      {props.page === 'web' ? <WebProjects /> : null}
      {props.page === 'ui' ? <UIProjects /> : null}
      {props.page === 'logodesign' ? <LogoProjects /> : null}
      {props.page === 'video' ? <VideoProjects /> : null}
      {props.page === 'thumb' ? <ThumbProjects /> : null}
      <Footer />
    </>
  )
}

export default ServicesPage
