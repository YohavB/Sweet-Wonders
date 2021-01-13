import React from "react";
import saimg1 from "../image/saltpic/1.jpeg";
import saimg2 from "../image/saltpic/2.jpeg";
import saimg3 from "../image/saltpic/3.jpeg";
import saimg4 from "../image/saltpic/4.jpeg";
import saimg5 from "../image/saltpic/5.jpeg";
import saimg6 from "../image/saltpic/6.jpeg";
import saimg7 from "../image/saltpic/7.jpeg";
import saimg8 from "../image/saltpic/8.jpeg";

const SaltyGallery = ({ setSelectedImg }) => {
  return (
    <div className="container">
      {""}
      <div className="gallery-container  ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg1)}>
            <img src={saimg1} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container  ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg2)}>
            <img src={saimg2} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg3)}>
            <img src={saimg3} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg4)}>
            <img src={saimg4} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg5)}>
            <img src={saimg5} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg6)}>
            <img src={saimg6} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg7)}>
            <img src={saimg7} alt="" />
          </div>
        </div>
      </div>

      <div className="gallery-container ">
        <div className="gallery-item">
          <div className="image" onClick={() => setSelectedImg(saimg8)}>
            <img src={saimg8} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaltyGallery;
