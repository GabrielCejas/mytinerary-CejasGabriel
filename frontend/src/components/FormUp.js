import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";

const FormUp = ({ name, signUp, logIn }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    photo: "",
    country: "",
  });

  const [error, setError] = useState(null);
  const onSubmit = async (e) => {
    let respuesta = await signUp(form);
    if (!respuesta.data.success) {
      setError(respuesta.data.errors.map((msj)=>{
        return (msj.message)
      }));
      console.log(respuesta.data.errors[0])
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
    <div className="signUp">
      <Form
        className="col-11 col-xl-6 my-5 signUpForm"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="py-4 signTitle">Sign up!</h3>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("firstName", {
              required: { value: true, message: "Field is required" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "The format is not correct",
              },
            })}
            name="firstName"
            type="text"
            placeholder="Please, enter your first name"
            onChange={handleChange}
            value={form.firstName}
          />
          {errors.firstName && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.firstName.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("lastName", {
              required: { value: true, message: "Field is required" },
              pattern: {
                pattern: /^[A-Za-z]+$/i,
                message: "The format is not correct",
              },
            })}
            name="lastName"
            type="text"
            placeholder="Please, enter your last name"
            onChange={handleChange}
            value={form.lastName}
          />
          {errors.lastName && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.lastName.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3" controlId="formBasicEmail">
          <Form.Control
            {...register("email", {
              required: { value: true, message: "Field is required" },
              pattern: {
                value:
                  /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i,
                message: "The format is not correct",
              },
            })}
            name="email"
            type="email"
            placeholder="Please, enter your email adress"
            onChange={handleChange}
            value={form.email}
          />
          {errors.email && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.email.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3 " controlId="formBasicPassword">
          <Form.Control
            {...register("password", {
              required: {
                value: true,
                message: "Field is required",
              },
              minLength: {
                value: 5,
                message: "The password must be at least 6 characters long",
              },
            })}
            name="password"
            type="password"
            placeholder="Please, enter your password"
            onChange={handleChange}
            value={form.password}
          />
          {errors.password && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.password.message}</span>
            </Alert>
          )}
        </Form.Group>
        <Form.Group className="mb-3 py-3">
          <Form.Control
            {...register("photo", {
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            name="photo"
            type="text"
            placeholder="Please, enter the URL of your picture"
            onChange={handleChange}
            value={form.photo}
          />
          {errors.photo && (
            <Alert className="col-xl-12 p-0 m-0" variant="warning">
              <span>{errors.photo.message}</span>
            </Alert>
          )}
        </Form.Group>
        {name.length > 0 ? (
          <Form.Select
            {...register("country", {
              required: {
                value: true,
                message: "Field is required",
              },
            })}
            className="mb-3"
            aria-label="Default select example"
            name="country"
            onChange={handleChange}
            value={form.country}
          >
            {errors.country && (
              <Alert className="col-xl-12 p-0 m-0" variant="warning">
                <span>{errors.country.message}</span>
              </Alert>
            )}
            <option>Choose your country</option>
            {name.map((country, id) => (
              <option value={country.name} key={id}>
                {country.name}
              </option>
            ))}
          </Form.Select>
        ) : (
          <Form.Select className="mb-3" aria-label="Default select example">
            <option value={null}>
              The list of countries is not available.
            </option>
          </Form.Select>
        )}
        <Alert className="col-xl-12 p-0 mb-2" variant="danger">
          {error}
        </Alert>
        <Button
          bg="dark"
          variant="dark"
          type="submit"
          className="signInButton px-3"
        >
          Sign Up!
        </Button>
        <h5 className="py-3 signh5">
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

const mapDispatchToProps = {
  logIn: userActions.logIn,
  signUp: userActions.signUp,
};

export default connect(null, mapDispatchToProps)(FormUp);
