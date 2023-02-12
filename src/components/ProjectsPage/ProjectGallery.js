import React from "react";
import "./Projects.css";

export default function ProjectGallery() {
  return (
    <>
      <div className="gallery-hero">
        <h1 className="heading">Logo Design</h1>
        <h5 className="subheading">
          Professional minimalist logo design that captures the essence of your
          brand and sets you apart from the competition.
        </h5>
      </div>
      <div className="project-gallery">
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
        <div className="gallery-card"></div>
      </div>
    </>
  );
}
