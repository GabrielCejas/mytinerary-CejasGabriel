/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import image from "../assets/login.svg";
const img = <img src={image} />;
function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5 py-3">
      <Navbar.Brand href="#home">MyTinerary!</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Cities</Nav.Link>
          <NavDropdown title={img} id="basic-nav-dropdown" className="login">
            <NavDropdown.Item href="#action/3.1">Sign in</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Sign up</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavBar;
