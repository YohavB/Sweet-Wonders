import React, { useEffect } from "react";
import useStorage from "../hooks/useStorage";

const ProgressBar = ({ file, setFile, selectedGallery }) => {
  const { url, progress } = useStorage(file, selectedGallery);
  
  useEffect(() => {
    if(url) {
      setFile(null)
    }
  }, [url, setFile])

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;
