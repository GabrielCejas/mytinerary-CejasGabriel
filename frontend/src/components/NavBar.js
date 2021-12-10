/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/login.svg";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions"

const img = <img src={image} />;
const NavBar = (props) => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5 py-3">
      <Navbar.Brand href="#home">
        MyTinerary! {props.token ? `Welcome to ${props.photo}` : ""}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/Cities">
            Cities
          </Nav.Link>
          <NavDropdown title={img} id="basic-nav-dropdown" className="login">
           {!props.token ?  <NavDropdown.Item as={Link} to="/signin">
              Sign in
            </NavDropdown.Item> : ""}
            {!props.token ? <NavDropdown.Item as={Link} to="/signup">
              Sign up
            </NavDropdown.Item> : ""}
            {props.token ? <NavDropdown.Item onClick={() => props.logOut()}>
              Sign Out
            </NavDropdown.Item> : ""}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const mapStateToProps = (state) => {
  return {
    token: state.userReducer.token,
    photo: state.userReducer.photo,
    name: state.userReducer.name,
  };
};
const mapDispatchToProps = {
  logOut: userActions.logOut
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
