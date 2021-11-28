import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap/";
import axios from "axios";
import { Link } from "react-router-dom";

function CityCards() {
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
      {cities.map((city) => {
        let photos = require(`../assets/${city.photo}`).default;
        return (
          <Container key={city.id}>
            <Card>
              <Card.Img variant="top" src={photos} />
              <Card.Body>
                <Card.Title>{city.name}</Card.Title>
                <Card.Title>{city.country}</Card.Title>
                <Card.Text>{city.description}</Card.Text>
                <Link to={`/Cities/${city._id}`}>Information </Link>
              </Card.Body>
            </Card>
          </Container>
        );
      })}
    </>
  );
}

export default CityCards;
