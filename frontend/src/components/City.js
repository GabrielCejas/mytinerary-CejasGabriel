import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap/";

function City() {
  const [cities, setCities] = useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/api/datos")
      .then((res) => res.json())
      .then((data) => setCities(data.response.cities))
      .catch((err) => console.err(err.messaje));
  });
  return (
    <>
      <div className="pageCity">
        <h1>Cities</h1>
      </div>
      {cities.map((city) => {
        let photos = require(`../assets/${city.photo}`).default;
        return (
          <Container>
            <Card>
              <Card.Img variant="top" src={photos} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Title>{city.country}</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
}

export default City;
