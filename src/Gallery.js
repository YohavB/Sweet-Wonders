import React, { Component } from "react";

class Gallery extends Component {
  render() {
    let InstaData = this.props.InstaData;

    return (
      <div className="gallery">
        {InstaData &&
          InstaData.map((item, index) => {
            return (
              <div className="insta" key={index}>
                <blockquote
                  className="instagram-media"
                  data-instgrm-permalink={`https://www.instagram.com/p/${item}/`}
                ></blockquote>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Gallery;
