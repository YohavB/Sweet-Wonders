import React, { useState } from "react";

import { firebaseApp } from "../firebase/config";

const Contact = (props) => {
  let Data = props.Data;

  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    firebaseApp.collection("contact")
      .add({
        name: name,
        mail: mail,
        message: message,
        phone: phone,
      })
      .then(() => {
        alert("Message has been submitted");
        setLoader(false);
        setName("");
        setMail("");
        setPhone("");
        setMessage("");
      })
      .catch((error) => {
        alert(error.message);
        setLoader(false);
      });
  };

  return (
    <div>
      <div className="contact">
        <form className="form" onSubmit={handleSubmit}>
          <div className="title">{Data.contactus}</div>

          <label>{Data.nameForm}</label>
          <input
            placeholder="Nom"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
          />

          <label>{Data.emailForm}</label>
          <input
            placeholder="e.g. : email@gmail.com"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
          />

          <label>{Data.phoneForm}</label>
          <input
            required
            placeholder="e.g. : +972541234567"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <div>{Data.eventForm}</div>

          <div className="radio-btn">
            <input type="radio" id="anniv" name="event" value="anniv" />{" "}
            <label for="anniv">{Data.birthday}</label>
            <input
              type="radio"
              id="petitdej"
              name="event"
              value="petitdej"
            />{" "}
            <label for="petitdej">{Data.breakfast}</label>
            <input
              type="radio"
              id="fiancaille"
              name="event"
              value="fiancaille"
            />{" "}
            <label for="fiancaille">{Data.engagement}</label>
            <input type="radio" id="autre" name="event" value="autre" />{" "}
            <label for="autre">{Data.other}</label>
          </div>

          <label>{Data.message}</label>
          <textarea
            required
            placeholder="Message"
            value={Data.message}
            onChange={(e) => setMessage(e.target.value)}
          >
            {" "}
          </textarea>

          <button type="submit" style={{ background: loader ? "#ccc" : "" }}>
            {Data.submit}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
