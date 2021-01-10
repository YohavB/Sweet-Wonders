import React, { Component } from "react";
import swimg1 from "./image/sweetpic/1.jpg";
import swimg2 from "./image/sweetpic/2.jpg";
import swimg3 from "./image/sweetpic/3.jpg";
import swimg4 from "./image/sweetpic/4.jpg";
import swimg5 from "./image/sweetpic/5.jpg";
import swimg6 from "./image/sweetpic/6.jpg";
import swimg7 from "./image/sweetpic/7.jpg";
import swimg8 from "./image/sweetpic/8.jpg";
import swimg9 from "./image/sweetpic/9.jpg";

export default class SweetGallery extends Component {
  render() {
    return (
      <div className="container">
        {""}
        <div className="gallery-container w-4 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg1} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg2} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2 h-6">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg3} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-5">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg4} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg5} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg6} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-6">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg7} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-1">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg8} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-5">
          <div className="gallery-item">
            <div className="image">
              <img src={swimg9} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
