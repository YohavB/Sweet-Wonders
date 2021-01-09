import React, { useState } from "react";

import { db } from "./firebase";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");

  const [loader, setLoader] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoader(true);

    db.collection("contact")
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
    <div className="container">
    <div className="contact">
      <form className="form" onSubmit={handleSubmit}>
        <div className="title">Contactez-Nous</div>

        <label>Nom</label>
        <input
          placeholder="Nom"
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email</label>
        <input
          placeholder="e.g. : email@gmail.com"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />

        <label>Téléphone</label>
        <input
          required
          placeholder="e.g. : +972541234567"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <div>Pour quel type d'evenement ?</div>

        <div className="radio-btn">
          <input type="radio" id="anniv" name="event" value="anniv" />{" "}
          <label for="anniv">Anniversaire</label>
          <input
            type="radio"
            id="petitdej"
            name="event"
            value="petitdej"
          />{" "}
          <label for="petitdej">Petit Dejeuner</label>
          <input
            type="radio"
            id="fiancaille"
            name="event"
            value="fiancaille"
          />{" "}
          <label for="fiancaille">Fiancaile</label>
          <input type="radio" id="autre" name="event" value="autre" />{" "}
          <label for="autre">Autre</label>
        </div>

        <label>Message</label>
        <textarea
          required
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        >
          {" "}
        </textarea>

        <button type="submit" style={{ background: loader ? "#ccc" : "" }}>
          Submit
        </button>
      </form>
    </div>
    </div>
  );
};

export default Contact;
