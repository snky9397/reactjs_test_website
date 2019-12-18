import React, { Component } from "react";

class Page extends Component {
  state = {
    img: 0
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <img
            src="https://www.designyourway.net/diverse/darkpat/COLOURlovers.com-Grey_Background.jpg"
            className="rounded mx-auto d-block"
            alt="?"
          />
        </div>
      </React.Fragment>
    );
  }
}
