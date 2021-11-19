import React from "react";
import { Nav } from "react-bootstrap";

function NavBarFooter() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="navFooter" href="#">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navFooter" eventKey="#">
          Cities
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navFooter" href="#">
          Sign In
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navFooter" eventKey="#">
          Sign Up
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavBarFooter;
