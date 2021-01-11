import React, { useState } from "react";

import SweetGallery from "./SweetGallery";
import SaltyGallery from "./SaltyGallery";

import sweeticon from "./image/sweet.png";
import salticon from "./image/salty.png";
import Modal from "./Modal";

function Gallery() {
  const [gallery, setGallery] = useState(null);
  const [selectedImg, setSelectedImg] = useState(null);

  const renderGallery = () => {
    if (gallery === null) {
      return null;
    }
    return gallery ? (
      <SweetGallery setSelectedImg={setSelectedImg} />
    ) : (
      <SaltyGallery setSelectedImg={setSelectedImg} />
    );
  };

  return (
    <div className="gallery">
      <div className="gallery-header">
        <img
          className="gallery-button"
          src={sweeticon}
          alt="Check our Sweet Gallery"
          title="Check our Sweet Gallery !"
          onClick={() => setGallery(true)}
        />
        <img
          className="gallery-button"
          src={salticon}
          alt="Check our Salty Gallery"
          title="Check our Salty Gallery !"
          onClick={() => setGallery(false)}
        />
      </div>
      {renderGallery()}
      {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg}/>}
    </div>
  );
}

export default Gallery;
