import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ImgProjects from "./Projects/ImgProjects";
// import ThumbProjects from "./Projects/ThumbProjects";
// import UIProjects from "./Projects/UIProjects";
import VideoProjects from "./Projects/VideoProjects";
import WebProjects from "./Projects/WebProjects";
import ServicesBar from "./ServicesMainSection/ServicesBar";

function ServicesPage(props) {
  console.log(props.page);
  return (
    <>
      <Navbar />
      <h2>Services</h2>
      <ServicesBar class={props.page} />
      {props.page === "web" ? <WebProjects /> : null}
      {/* {props.page === "ui" ? <UIProjects /> : null} */}
      {props.page === "ui" ? (
        <ImgProjects
          title="UI Design"
          img="ui"
          description="User interface design that creates engaging and intuitive experiences for your users, elevating your brand and improving user engagement."
        />
      ) : null}
      {props.page === "logodesign" ? (
        <ImgProjects
          title="Logo Design"
          img="logos"
          description="Professional minimalist logo design that captures the essence of your brand and sets you apart from the competition."
        />
      ) : null}
      {props.page === "video" ? <VideoProjects /> : null}
      {/* {props.page === "thumb" ? <ThumbProjects /> : null} */}
      {props.page === "thumb" ? (
        <ImgProjects
          title="Thumbnail Design"
          img="thumbs"
          description="Eye-catching thumbnail designs that help your videos stand out in a crowded online space."
        />
      ) : null}
      <Footer />
    </>
  );
}

export default ServicesPage;
