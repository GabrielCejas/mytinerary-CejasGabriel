/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import image from "../assets/login.svg";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const img2 = <img src={image} />;
const NavBar = (props) => {
  const img = <img className="photoRegister img-fluid" src={props.photo} />;
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="px-5 py-3">
      <Navbar.Brand href="#home">
        <p>MyTinerary!</p>{" "}
        <p>{props.token ? `Welcome to ${props.firstName}` : ""}</p>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav " />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link eventKey={2} as={Link} to="/Cities">
            Cities
          </Nav.Link>
          <NavDropdown
            title={props.token ? img : img2}
            id="basic-nav-dropdown"
            className="login"
          >
            {!props.token ? (
              <NavDropdown.Item as={Link} to="/signin">
                Sign in
              </NavDropdown.Item>
            ) : (
              ""
            )}
            {!props.token ? (
              <NavDropdown.Item as={Link} to="/signup">
                Sign up
              </NavDropdown.Item>
            ) : (
              ""
            )}
            {props.token ? (
              <NavDropdown.Item onClick={() => props.logOut()}>
                Log Out
              </NavDropdown.Item>
            ) : (
              ""
            )}
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
    firstName: state.userReducer.firstName,
  };
};
const mapDispatchToProps = {
  logOut: userActions.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
