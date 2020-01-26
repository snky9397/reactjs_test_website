import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";

class Menu extends Component {
  render() {
    return (
      <Navbar inverse fixed expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">Coach Buddy</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#categories">Categories</Nav.Link>
            <Nav.Link href="#subscribe">Subscribe</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="#details">More Details</Nav.Link>
            <Nav.Link eventKey={2} href="#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Menu;
