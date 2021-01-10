import React, { Component } from "react";
import saimg1 from "./image/saltpic/1.jpg";
import saimg2 from "./image/saltpic/2.jpg";
import saimg3 from "./image/saltpic/3.jpg";
import saimg4 from "./image/saltpic/4.jpg";
import saimg5 from "./image/saltpic/5.jpg";
import saimg6 from "./image/saltpic/6.jpg";
import saimg7 from "./image/saltpic/7.jpg";
import saimg8 from "./image/saltpic/8.jpg";
import saimg9 from "./image/saltpic/9.jpg";

export default class SaltyGallery extends Component {
  render() {
    return (
      <div className="container">
        {""}
        <div className="gallery-container w-4 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg1} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3 h-1">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg2} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2 h-6">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg3} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-5">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg4} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg5} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-3">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg6} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-6">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg7} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-1">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg8} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-containerw-5">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg9} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
