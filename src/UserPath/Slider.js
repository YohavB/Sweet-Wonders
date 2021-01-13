import React, { useState } from "react";
import ImgComp from "./ImgComp";
import "./slider.scss";

import sweet1 from "../src/image/sweet1.jpeg";
import sweet2 from "../src/image/sweet2.jpeg";
import sweet3 from "../src/image/sweet3.jpeg";
import sweet4 from "../src/image/sweet4.jpeg";
import sweet5 from "../src/image/sweet5.jpeg";
import sweet6 from "../src/image/sweet6.jpeg";

function Slider() {
  let sliderArr = [
    <ImgComp src={sweet1} />,
    <ImgComp src={sweet2} />,
    <ImgComp src={sweet3} />,
    <ImgComp src={sweet4} />,
    <ImgComp src={sweet5} />,
    <ImgComp src={sweet6} />,
  ];
  const [x, setX] = useState(0);
  const goLeft = () => {
    x === 0 ? setX(-108 * (sliderArr.length - 2)) : setX(x + 108);
  };
  const goRight = () => {
    x === -108 * (sliderArr.length - 2) ? setX(0) : setX(x - 108);
  };

  return (
    <div id="galerie" className="slider">
      {sliderArr.map((item, index) => {
        return (
          <div
            key={index}
            className="slide"
            style={{ transform: `translateX(${x}%)` }}
          >
            {item}
          </div>
        );
      })}
      <button id="goLeft" onClick={goLeft}>
       <i class="fas fa-chevron-left"></i>
      </button>
      <button id="goRight" onClick={goRight}>
      <i class="fas fa-chevron-right"></i>
      </button>
    </div>
  );
}

export default Slider;
