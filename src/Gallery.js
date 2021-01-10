import React, { Component } from "react";

import SweetGallery from "./SweetGallery";
import SaltyGallery from "./SaltyGallery";

import sweeticon from "./image/sweet.png";
import salticon from "./image/salty.png";

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gallery: null,
    };
  }

  renderGallery = () => {
    if (this.state.gallery === null) {
      return null;
    }
    return this.state.gallery ? <SweetGallery /> : <SaltyGallery />;
  };

  render() {
    return (
      <div className="gallery">
        <div className="gallery-header">
          <img
            className="gallery-button"
            src={sweeticon}
            alt="Check our Sweet Gallery"
            title="Check our Sweet Gallery !"
            onClick={() => this.setState({ gallery: true })}
          />
          <img
            className="gallery-button"
            src={salticon}
            alt="Check our Salty Gallery"
            title="Check our Salty Gallery !"
            onClick={() => this.setState({ gallery: false })}
          />
        </div>
        {this.renderGallery()}
      </div>
    );
  }
}

export default Gallery;
