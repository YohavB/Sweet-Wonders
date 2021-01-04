import React, { Component } from "react";
import InstagramEmbed from "react-instagram-embed";

class Gallery extends Component {
  render() {
    let InstaData = this.props.InstaData;

    return (
      <div className="gallery">
        {InstaData &&
          InstaData.map((item, index) => {
            return (
              <div className="insta" key={index}>
                  <InstagramEmbed
          url={`https://instagr.am/p/${item}/`}
          clientAccessToken="3967631443289067|73c0233d80cce43add4b40ac86736bc6"
          maxWidth={320}
          hideCaption={true}
          containerTagName="div"
          protocol=""
          injectScript
          onLoading={() => {}}
          onSuccess={() => {}}
          onAfterRender={() => {}}
          onFailure={() => {}}
        />
              </div>
            );
          })}
    
      </div>
    );
  }
}

export default Gallery;
