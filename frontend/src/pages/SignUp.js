import  axios  from "axios";
import React, { useEffect, useState } from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";


const SignUp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);
  console.log(countries);
  return (
    <div className="signUp">
      <Form className="col-11 col-xl-6 my-5 signUpForm">
        <h3 className="py-4 signTitle">Sign up!</h3>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            type="text"
            placeholder="Please, enter your first name"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            type="text"
            placeholder="Please, enter your last name"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            placeholder="Please, enter your email adress"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            placeholder="Please, enter your password"
          />
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            type="text"
            placeholder="Please, enter the URL of your picture"
          />
        </Form.Group>
        {countries.length > 0 ? (<Form.Select className="mb-3" aria-label="Default select example">
          <option>Choose your country</option>
          {countries.map((country => (<option value={country.name}>{country.name}</option>)))}
        </Form.Select>) : (<Form.Select className="mb-3" aria-label="Default select example">
          <option value={null}>The list of countries is not available.</option>
        </Form.Select>)}
        <Button
          bg="dark"
          variant="dark"
          type="submit"
          className="signInButton px-3"
        >
          Sign Up!
        </Button>
        <h5 className="py-3 signh5">
          {" "}
          Or you can sign in with your Google account
        </h5>
        <h5 className="py-3 signh5">
          Already have an account?{" "}
          <Button variant="link" className="signh5" as={Link} to="/signin">
            Sign in here!
          </Button>
        </h5>
      </Form>
    </div>
  );
};

export default SignUp;
