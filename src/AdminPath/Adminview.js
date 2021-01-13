import React from "react";
//import { firebaseConfig } from "../firebase/config";
//import { Redirect } from "react-router";
import AdminGallery from "./AdminGallery";

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
  return (
    <div>
      <div className="gallery">
        <AdminGallery />
        {/* <button onClick={logout}>logout</button> */}
      </div>
    </div>
  );
}

export default Adminview;
