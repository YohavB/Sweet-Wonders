import React, { useState } from "react";

import sweeticon from "../image/sweet.png";
import salticon from "../image/salty.png";
import Modal from "./Modal";
import ImageGrid from "../UserPath/ImageGrid";

function Gallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState("0");

  return (
    <div className="gallery">
      <div className="gallery-header">
        <img
          className="gallery-button"
          src={sweeticon}
          alt="Check our Sweet Gallery"
          title="Check our Sweet Gallery !"
          onClick={() => setSelectedGallery("sweetGallery")}
        />
        <img
          className="gallery-button"
          src={salticon}
          alt="Check our Salty Gallery"
          title="Check our Salty Gallery !"
          onClick={() => setSelectedGallery("saltyGallery")}
        />
      </div>
      <ImageGrid selectedGallery={selectedGallery} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default Gallery;
