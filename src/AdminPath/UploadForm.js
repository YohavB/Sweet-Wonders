import React, { useState } from "react";
import ProgressBar from "./ProgressBar";

const UploadForm = ({selectedGallery}) => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];

  const changeHandler = (e) => {
    console.log("changed");
    let selected = e.target.files[0];

    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setError("");
    } else {
      setFile(null);
      setError("Please select an image file (png, jpg or jpeg) ");
    }
  };

  return (
    <form>
      <label>
        <input type="file" onChange={changeHandler} />
        <span>Rajouter une photo a {selectedGallery}</span>
      </label>
      <div className="output">
        {error && <div className="error">{error}</div>}
        {file && <div> {file.name} </div>}
        {file && <ProgressBar file={file} setFile={setFile} selectedGallery={selectedGallery}/>}
      </div>
    </form>
  );
};

export default UploadForm;
