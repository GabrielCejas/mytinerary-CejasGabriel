/* eslint-disable array-callback-return */
import React, { useEffect, useState } from "react";
import { Card, Container, Form, Alert } from "react-bootstrap/";
import axios from "axios";
import { Link } from "react-router-dom";

function CityCards() {
  const [cities, setCities] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response));
  }, []);

  const city = cities.filter((city) => {
    if (filter === "") {
      return city;
    } else if (
      city.name.toString().toLowerCase().startsWith(filter.name.toString().toLowerCase().trim())
    ) {
      return city;
    }
  });
  return (
    <>
      <div className="pageCity">
        <h1>Cities</h1>
      </div>
      <Form className="col-xl-6 col-sm-4 col-5">
        <Form.Group className="mb-3">
          <Form.Label>Search for a city</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={(e) => {
              setFilter({ name: e.target.value });
            }}
            placeholder="Enter a city"
          />
        </Form.Group>
      </Form>
      {city.length > 0 ? (
        city.map((City) => {
          let photos = require(`../assets/${City.photo}`).default;
          return (
            <Container key={City.name}>
              <Card className="my-3">
                <Card.Img variant="top" src={photos} />
                <Card.Body>
                  <Card.Title>{City.name}</Card.Title>
                  <Card.Title>{City.country}</Card.Title>
                  <Card.Text className="mb-4">{City.description}</Card.Text>
                  <Link className="buttonCities m-3" to={`/Cities/${City._id}`}>
                    Information
                  </Link>
                </Card.Body>
              </Card>
            </Container>
          );
        })
      ) : (
        <Alert className="col-xl-6" variant="warning" >
          The city was not found
        </Alert>
      )}
    </>
  );
}

export default CityCards;
