import React, { useState } from "react";
import "./Projects.css";
import { images, packages } from "./imageURL";
import PackageCard from "../Prices/PackageCard";

function ImgProjects(props) {
  const [modalImg, setModalImg] = useState("");
  function modalOpener(e) {
    setModalImg(images[props.img][e.target.id]);
  }
  const packageData = packages[props.img];
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
      </div>

      <h2>Packages</h2>
      <div className="cards-container flex">
        <PackageCard
          title={packageData.basic.title}
          price={packageData.basic.price}
          incl={packageData.basic.incl}
          notincl={packageData.basic.notincl}
        />
        <PackageCard
          title={packageData.standard.title}
          price={packageData.standard.price}
          incl={packageData.standard.incl}
          notincl={packageData.standard.notincl}
        />
        <PackageCard
          title={packageData.premium.title}
          price={packageData.premium.price}
          incl={packageData.premium.incl}
          notincl={packageData.premium.notincl}
        />
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
