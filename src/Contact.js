import React, { Component } from "react";

export class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3002/send", {
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("Message Sent.");
        this.resetForm();
      } else if (response.data.status === "fail") {
        alert("Message failed to send.");
      }
    });
  }

  resetForm() {
    this.setState({ name: "", email: "", message: "" });
  }

  render() {
    return (
      <div className="contact">
        <small>Enter message (optional) and click button "Send"</small>
        <div class="wrapper centered">
          <article class="letter">
            <div class="side">
              <h1>Contact us</h1>
              <p>
                <textarea placeholder="Your message"></textarea>
              </p>
            </div>
            <div class="side">
              <p>
                <input type="text" placeholder="Your name" />
              </p>
              <p>
                <input type="email" placeholder="Your email" />
              </p>
              <p>
                <button id="sendLetter">Send</button>
              </p>
            </div>
          </article>
          <div class="envelope front"></div>
          <div class="envelope back"></div>
        </div>
        <p class="result-message centered">Thank you for your message</p>
      </div>
    );
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onMessageChange(event) {
    this.setState({ message: event.target.value });
  }
}

export default Contact;
