import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Example = () => {
  const images = [
    "https://www.uj.ac.za/wp-content/uploads/2024/08/uj-banners-uj-funwalk.jpg",
    "https://www.uj.ac.za/wp-content/uploads/2024/08/uj-banners-uj-whatsapp.jpg",

  ];

  return (
    <Slide >
      {images.map((image, index) => (
        <div className="each-slide-effect  " key={index}>
          <div className="flex  justify-center bg-cover ">
            <img src={image} alt="" className="bg-cover" />
          </div>
        </div>
      ))}
    </Slide>
  );
};

export default Example;
///ghjhfggngfgn