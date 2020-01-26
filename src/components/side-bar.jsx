import React, { Component } from "react";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>

      <a className="menu-item" href="/galary">
        Galary
      </a>

      <a className="menu-item" href="/social">
        Social Media
      </a>

      <a className="menu-item" href="/reaction">
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
