import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const FormIn = ({logIn}) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const[error, setError] = useState(null)

  const onSubmit = async (e) => {
    let respuesta = await logIn(form)
    if(!respuesta.data.success){
      setError(respuesta.data.error)
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="signIn">
      <Form
        className=" col-11 col-xl-6 col-xxl-4 my-3 signInForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="p-4 signTitle">Sign in!</h3>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\. [A-Z]{2,4}$/i,
                message: "The format is not correct",
              },
            })}
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.email.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            {...register("password", {
              required: {
                value: true,
                message: "Field is required",
              },
              minLength: {
                value: 6,
                message: "The password must be at least 6 characters long",
              },
            })}
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.password.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Alert className="col-xl-12 p-0 mb-2" variant="danger">{error}</Alert>
        <Button
          bg="dark"
          variant="dark"
          type="submit"
          className="signInButton px-4"
        >
          Sign in!
        </Button>
        <h5 className="py-3 signh5">
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

const mapDispatchToProps = {
  logIn: userActions.logIn,
  signUp: userActions.signUp
}
export default connect(null, mapDispatchToProps)(FormIn);
