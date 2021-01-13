import React from "react";
//import { firebaseApp } from "../firebase/config";
//import { Redirect } from "react-router";
import UploadForm from "./UploadForm";

// const logout = () => {
//   firebaseApp
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
      <UploadForm />
      {/* <button onClick={logout}>logout</button> */}
    </div>
  );
}

export default Adminview;
