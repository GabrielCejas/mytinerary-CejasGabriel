import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className="signIn">
      <Form className=" col-11 col-xl-6 col-xxl-4 my-3 signInForm">
        <h3 className="p-4 signTitle">Sign in!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          bg="dark"
          variant="dark"
          type="submit"
          className="signInButton"
          py-4
        >
          Sign in!
        </Button>
        <h5 className="py-3 signh5">
          {" "}
          Or you can sign in with your Google account
        </h5>
        <h5 className="signh5">
          Don't have an account?{" "}
          <Button variant="link" className="signh5" as={Link} to="/signup">
            Sign up here!
          </Button>
        </h5>
      </Form>
    </div>
  );
};

export default SignIn;
