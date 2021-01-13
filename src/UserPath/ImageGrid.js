import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg, selectedGallery }) => {
  const { docs } = useFirestore(`${selectedGallery}`);
  console.log(docs);

  return (
    <div>
    <div className="img-grid">
      
      {docs &&
        docs.map((doc) => (
          <div
            className="img-wrap"
            key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img className="image" src={doc.url} alt="uploaded pic" />
          </div>
        ))}
    </div>
    </div>
  );
};

export default ImageGrid;
