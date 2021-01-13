import React, { useState } from "react";

import sweeticon from "../image/sweet.png";
import salticon from "../image/salty.png";
import Modal from "../UserPath/Modal";
import ImageGrid from "../UserPath/ImageGrid";
import UploadForm from "./UploadForm";

function AdminGallery() {
  const [selectedImg, setSelectedImg] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);

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

      <UploadForm selectedGallery={selectedGallery}/>
      <ImageGrid selectedGallery={selectedGallery} setSelectedImg={setSelectedImg} />
      {selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default AdminGallery;
