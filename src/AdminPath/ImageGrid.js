import React from "react";
import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }) => {
  const { docs } = useFirestore("sweetGallery");
  console.log(docs);

  return (
    <div className="container">
      {docs &&
        docs.map((doc) => (
          <div className="gallery-container" key={doc.id}>
            <div
              className="gallery-item"
              onClick={() => setSelectedImg(doc.url)}
            >
              <img className="image" src={doc.url} alt="uploaded pic" />
            </div>
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;
