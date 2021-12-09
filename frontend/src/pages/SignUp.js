import axios from "axios";
import React, { useEffect, useState } from "react";
import { FormUp } from "../components/FormUp";

const SignUp = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://restcountries.com/v2/all?fields=name")
      .then((res) => setCountries(res.data));
  }, []);
  
  return (
    <FormUp name={countries}/>
  );
};

export default SignUp;
