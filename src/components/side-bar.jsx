import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/reactjs_test_website">
        Home
      </a>

      <a className="menu-item" href="/reactjs_test_website/galary">
        Galary
      </a>

      <a className="menu-item" href="/reactjs_test_website/social">
        Social Media
      </a>

      <a className="menu-item" href="/reactjs_test_website/reaction">
        React-ion
      </a>

      {/* <a className="menu-item" href="/vue">
        Vue
      </a>

      <a className="menu-item" href="/node">
        Node
      </a> */}
    </Menu>
  );
};
