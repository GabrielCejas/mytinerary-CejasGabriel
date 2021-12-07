import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBarFooter= () => {
  return (
    <Nav className="navFooter">
      <Nav.Item>
        <Nav.Link className="btnFooter" as={Link} to="/">
          Home
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btnFooter" eventKey={2} as={Link} to="/Cities">
          Cities
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btnFooter" as={Link} to ="/signin">
          Sign In
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="btnFooter" eventKey="2" as={Link} to ="/signup">
          Sign Up
        </Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
export default NavBarFooter;
