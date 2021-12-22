import React, { useEffect, useState } from "react";
import axios from "axios";
import { Form, Button, Alert } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import userActions from "../redux/actions/userActions";
import GoogleLogin from "react-google-login";

const FormUp = ({ signUp }) => {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);
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
    let response = await signUp(form);
    if (!response.data.success) {
      if(Array.isArray(response.data.errors)){
        setError(
          response.data.errors.map((msj, id) => {
            return <p key={id}>{msj.message}</p>;
          })
        );
      }else{
        setError(<p>{response.data.error}</p>)
      }
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const responseGoogle = async (res) => {
    let form = {
      firstName: res.profileObj.givenName,
      lastName: res.profileObj.familyName,
      email: res.profileObj.email,
      password: res.profileObj.googleId,
      photo: res.profileObj.imageUrl,
      country: "Argentina",
      google: true,
    }
    let response = await signUp(form);
    if (!response.data.success) {
      setError( response.data.error)
    }
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
        {countries.length > 0 ? (
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
            {countries.map((country, id) => (
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
        <GoogleLogin
          clientId="660945448193-nfbain4p775obq5ea5p3f866pmmkc6ep.apps.googleusercontent.com"
          buttonText="Sign Up With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
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
  signUp: userActions.signUp,
};

export default connect(null, mapDispatchToProps)(FormUp);
