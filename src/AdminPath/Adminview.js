import React, { useState } from "react";
import ImageGrid from "./ImageGrid";
//import { firebaseConfig } from "../firebase/config";
//import { Redirect } from "react-router";
import UploadForm from "./UploadForm";
import Modal from "../UserPath/Modal";

// const logout = () => {
//   firebaseConfig
//     .auth()
//     .signOut()
//     .then(function () {
//       console.log("logout success");
//       return <Redirect to="/login" />;
//     })
//     .catch(function (error) {
//       console.log("error");
//     });
// };

function Adminview() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div>
      <UploadForm />
      <div className="gallery">
        <ImageGrid setSelectedImg={setSelectedImg} />
        {selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
      </div>
      {/* <button onClick={logout}>logout</button> */}
    </div>
  );
}

export default Adminview;
