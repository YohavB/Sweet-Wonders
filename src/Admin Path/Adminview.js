import React from "react";
import { firebaseApp } from "../firebase";
import { Redirect } from "react-router";

const logout = () => {
  firebaseApp
    .auth()
    .signOut()
    .then(function () {
      console.log("logout success");
      return <Redirect to="/login" />;
    })
    .catch(function (error) {
      console.log("error");
    });
};

export default function Adminview() {
  return <div>Salut
<hr/>
      <button onClick={logout}>logout</button>
  </div>;
}
