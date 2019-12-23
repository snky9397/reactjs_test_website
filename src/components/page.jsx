import React, { Component } from "react";

class Page extends Component {
  state = {
    img: 0
  };

  render() {
    return (
      <div className="bg">
        <img
          src={
            "https://www.designyourway.net/diverse/darkpat/COLOURlovers.com-Grey_Background.jpg"
          }
          alt="?"
        />
      </div>
    );
  }
}

export default Page;
