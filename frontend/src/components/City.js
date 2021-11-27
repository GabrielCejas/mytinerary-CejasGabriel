import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap/";
import axios from "axios";
import Button from "@restart/ui/esm/Button";
import { Link } from "react-router-dom";

function City() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities")
      .then((res) => setCities(res.data.response));
  }, []);

  return (
    <>
      <div className="pageCity">
        <h1>Cities</h1>
      </div>
      {cities.map((city, id) => {
        let photos = require(`../assets/${city.photo}`).default;
        return (
          <Container key={id}>
            <Card>
              <Card.Img variant="top" src={photos} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Title>{city.country}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
                <Link to={`/Info/${id}`}>
                  <Button >Information</Button>
                </Link>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
}

export default City;
