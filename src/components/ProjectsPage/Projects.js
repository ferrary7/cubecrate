import React from "react";
import "./Projects.css";
import ProjectGallery from "./ProjectGallery";
import Pricing from "./Pricing";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Projects() {
  return (
    <>
      <Navbar />
      <div className="projects-hero">
        <h1 className="heading">Our Work</h1>
        <div className="services-menu">
          <div className="menu-item">Web Development</div>
          <div className="menu-item">UI Design</div>
          <div className="menu-item active">Logo Design</div>
          <div className="menu-item">Video Editing</div>
          <div className="menu-item">Thumbnail Design</div>
        </div>
      </div>
      <ProjectGallery />
      <Pricing />
      <Footer />
    </>
  );
}
