import React, { useState } from "react";

import { useSwipeable } from "react-swipeable";

import Home from "./Home";
import Salt from "./Salt";
import Sweet from "./Sweet";
import Gallery from "./Gallery";
import Contact from "./Contact";

export default function AppView(props) {
  let Data = props.Data;

  let sliderArr = [
    <Home Data={Data} />,
    <Salt Data={Data} />,
    <Sweet Data={Data} />,
    <Gallery />,
    <Contact Data={Data} />,
  ];

  const [x, setX] = useState(0);

  const goHome = () => {
    setX(0);
  };

  const goSalt = () => {
    setX(-100);
  };

  const goSweet = () => {
    setX(-200);
  };

  const goGalerie = () => {
    setX(-300);
  };

  const goContact = () => {
    setX(-400);
  };

  const handlers = useSwipeable({
    onSwipedRight: () => {
      x === 0 ? setX(x) : setX(x + 100);
      console.log(x);
    },
    onSwipedLeft: () => {
      x === -400 ? setX(x) : setX(x - 100);
      console.log(x);
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div {...handlers}>
      <div className="app-header">
        <div id="nav" className="nav">
          <div
            className={x === 0 ? "active" : "null"}
            href="#home"
            onClick={goHome}
          >
            {Data.home}
          </div>
          <div
            className={x === -100 ? "active" : "null"}
            href="#salt"
            onClick={goSalt}
          >
            {Data.saltyMenu}
          </div>
          <div
            className={x === -200 ? "active" : "null"}
            href="#sweet"
            onClick={goSweet}
          >
            {Data.sweetMenu}
          </div>
          <div
            className={x === -300 ? "active" : "null"}
            href="#galerie"
            onClick={goGalerie}
          >
            {Data.gallery}
          </div>
          <div
            className={x === -400 ? "active" : "null"}
            href="#contact"
            onClick={goContact}
          >
            {Data.contact}
          </div>
        </div>
      </div>
      <div className="appView">
        {sliderArr.map((item, index) => {
          return (
            <div
              key={index}
              className="pageView"
              style={{ transform: `translateX(${x}%)` }}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}
