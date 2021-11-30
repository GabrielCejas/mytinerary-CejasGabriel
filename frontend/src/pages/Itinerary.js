/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Card, Button, Collapse } from "react-bootstrap/";
import { FcLike, FcMoneyTransfer } from "react-icons/fc";
import axios from "axios";

function Itinerary() {
  const [itinerary, setItinerary] = useState();

  const { id } = useParams();
  console.log(useParams());

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/cities/" + id)
      .then((res) => setItinerary(res.data.response));
  }, [id]);

  function Example() {
    const [open, setOpen] = useState(false);
  
    return (
      <>
        <Button 
        className="btnItineray text-light bg-dark"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}>
          View More
        </Button>
        <Collapse in={open} className="colorCollapse">
          <div id="example-collapse-text">
          <img className="imgItineray" src={require("../assets/BrandenburgGate.jpg").default} />
          The Brandenburg Gate (in German, Brandenburger Tor) is an ancient gateway to Berlin and one of the main symbols of both the city and Germany. It is not a triumphal arch, but it was the access, in the manner of propylaea, to the "New Berlin" of the time. It is located in the current center of the city, in the Paris Square, forming the end of the Unter den Linden avenue and marking the beginning of the great Tiergarten park and the Straße des . Juni. The Reichstag and Potsdamer Platz are also located nearby. Important events in Berlin's history that are connected with the Brandenburg Gate
          </div>
        </Collapse>
      </>
    );
  }
  return (
    <>
      {itinerary && ( <><div>
        <img className="imgItineray" src={require(`../assets/${itinerary.photo}`).default} />
      </div>
        <h2 className="h2Itineray">Available Itineraries for {itinerary.name}</h2>
        <Card className="text-center col-xl-6 col-sm-4 col-5 mb-2" key={itinerary.id}>
          <Card.Header>The Brandenburg Gate</Card.Header>
          <Card.Body>
          <img className="imgPerson" src={require("../assets/registroPersona1.png").default} />
            <Card.Title>Nombre de la persona</Card.Title>
            <Card.Text>¡Here is some of our Itineraries!</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-around mb-2">
            <div>7 <FcLike/></div>
          <div>Price: <FcMoneyTransfer/><FcMoneyTransfer/></div>
          <div>Durattion: 2 hs</div>
          </Card.Footer>
          <Example />
        </Card>
        </>
      )}
      <Button
        className="my-3 text-light bg-dark btnItineray"
        eventkey={2}
        as={Link}
        to="/Cities">
        Back to Cities
      </Button>
    </>
  );
}

export default Itinerary;
