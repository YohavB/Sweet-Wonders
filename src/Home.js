import React, { Component } from "react";

export default class Home extends Component {
  render() {
    let Data = this.props.Data;
    return (
      <div className="home">
        <div className="titleandsocial">
          <div className="name">{Data.name}</div>
          <div className="desc">{Data.description}</div>

          <ul className="social">
            {Data.socialLinks &&
              Data.socialLinks.map((item) => {
                return (
                  <li key={item.name}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img className="icon" src={item.icon} alt={item.name}  title={item.text} />
                    </a>
                  </li>
                );
              })}
          </ul>
        </div>

        <div className="story">{Data.story}</div>
      </div>
    );
  }
}
