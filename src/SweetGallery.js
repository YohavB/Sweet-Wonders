import React from "react";
import swimg1 from "./image/sweetpic/1.jpeg";
import swimg2 from "./image/sweetpic/2.jpeg";
import swimg3 from "./image/sweetpic/3.jpeg";
import swimg4 from "./image/sweetpic/4.jpeg";
import swimg5 from "./image/sweetpic/5.jpeg";
import swimg6 from "./image/sweetpic/6.jpeg";
import swimg7 from "./image/sweetpic/7.jpeg";
import swimg8 from "./image/sweetpic/8.jpeg";
import swimg9 from "./image/sweetpic/9.jpeg";
import swimg10 from "./image/sweetpic/10.jpeg";

const SweetGallery = ({ setSelectedImg }) => {
  return (
    <div className="container">
      {""}
      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg1)}>
            <img src={swimg1} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg2)}>
            <img src={swimg2} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg3)}>
            <img src={swimg3} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg4)}>
            <img src={swimg4} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg5)}>
            <img src={swimg5} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg6)}>
            <img src={swimg6} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg7)}>
            <img src={swimg7} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg8)}>
            <img src={swimg8} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg9)}>
            <img src={swimg9} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(swimg10)}>
            <img src={swimg10} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SweetGallery;
