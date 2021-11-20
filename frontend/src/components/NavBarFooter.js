import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

function NavBarFooter() {
  return (
    <Nav>
      <Nav.Item>
        <Nav.Link className="navFooter" as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="navFooter" eventKey={2} as={Link} to="/Cities">
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
