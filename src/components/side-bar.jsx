import React from "react";

import { slide as Menu } from "react-burger-menu";

export default props => {
  return (
    <Menu>
      <a className="menu-item" href="home">
        Home
      </a>

      <a className="menu-item" href="book_now">
        Book Now
      </a>

      <a className="menu-item" href="know_your_itinerary">
        Know Your Itinerary
      </a>

      <a className="menu-item" href="galary">
        Galary
      </a>

      <a className="menu-item" href="social">
        Social Media
      </a>

      <a className="menu-item" href="reaction">
        About Us
      </a>
    </Menu>
  );
};
