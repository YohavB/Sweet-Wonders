import React, { Component } from "react";
import saimg1 from "./image/saltpic/1.jpeg";
import saimg2 from "./image/saltpic/2.jpeg";
import saimg3 from "./image/saltpic/3.jpeg";
import saimg4 from "./image/saltpic/4.jpeg";
import saimg5 from "./image/saltpic/5.jpeg";
import saimg6 from "./image/saltpic/6.jpeg";
import saimg7 from "./image/saltpic/7.jpeg";
import saimg8 from "./image/saltpic/8.jpeg";

export default class SaltyGallery extends Component {
  render() {
    return (
      <div className="container">
        {""}
        <div className="gallery-container  h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg1} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container  h-2 ">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg2} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg3} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-3 ">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg4} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg5} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container h-2">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg6} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container  h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg7} alt="" />
            </div>
          </div>
        </div>

        <div className="gallery-container w-2 h-3">
          <div className="gallery-item">
            <div className="image">
              <img src={saimg8} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
