import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Container, Button } from "react-bootstrap/";
import axios from "axios";

function Itinerary() {
  const [itinerary, setItinerary] = useState();

  const { id } = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/" + id)
      .then((res) => setItinerary(res.data.response));
  }, [id]);

  return (
    <>
      <h2 className="imgItynerari mb-4">Under construction</h2>
      {itinerary && (
        <Container key={itinerary.id}>
          <Card>
            <Card.Img
              variant="top"
              src={require(`../assets/${itinerary.photo}`).default}
            />
            <Card.Body>
              <Card.Title>{itinerary.name}</Card.Title>
              <Card.Title>{itinerary.country}</Card.Title>
              <Card.Text>{itinerary.description}</Card.Text>
            </Card.Body>
          </Card>
          <Button className="my-3 text-light bg-dark" eventkey={2} as={Link} to="/Cities">
            Back to Cities
          </Button>
        </Container>
      )}
    </>
  );
}

export default Itinerary;
