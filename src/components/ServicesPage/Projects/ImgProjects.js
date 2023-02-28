import React, { useState } from "react";
import "./Projects.css";
import { images } from "./imageURL";

function ImgProjects(props) {
  const [modalImg, setModalImg] = useState("");
  function modalOpener(e) {
    setModalImg(images[props.img][e.target.id]);
  }
  return (
    <>
      <div className="logo-projects services">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
        <div className="cards-container flex">
          {images[props.img].map((e, i) => {
            return (
              <div
                className="card"
                onClick={modalOpener}
                id={i}
                style={{ backgroundImage: `url(${e})` }}
              ></div>
            );
          })}
        </div>
        <h2>Pricing</h2>
      </div>
      {modalImg && (
        <div className="modal">
          <div
            className="modal-close"
            onClick={() => {
              setModalImg("");
            }}
          >
            X
          </div>
          <img src={modalImg} alt="" />
        </div>
      )}
    </>
  );
}

export default ImgProjects;
