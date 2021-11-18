import React from "react";
import { Carousel, Card, Col, Row } from "react-bootstrap/";

function CarouselB() {
  const arrayCountries = [
    { name: "Berlin", country: "Germany", photo: "berlin.jpg" },
    { name: "London", country: "England", photo: "londres.jpg" },
    { name: "Paris", country: "France", photo: "paris.jpg" },
    { name: "Moscow", country: "Russia", photo: "moscu.jpg" },
  ];
  const arrayCountries2 =[
    { name: "Lisbon", country: "Portugal", photo: "lisboa.jpg" },
    { name: "Tokyo", country: "Japan", photo: "tokio.jpg" },
    { name: "Vienna", country: "Austria", photo: "viena.jpg" },
    { name: "Washinton", country: "EEUU", photo: "washinton.jpg" },
  ]
  const arrayCountries3 =[
    { name: "Nueva York", country: "EEUU", photo: "nuevaYork.jpg" },
    { name: "Athens", country: "Greece", photo: "grecia.jpg" },
    { name: "Madrid", country: "Spain", photo: "madrid.jpg" },
    { name: "Zurich", country: "Switzerland ", photo: "zurich.jpg" },
  ]

  return (
    <Carousel className="my-5 Carousel">
      <Carousel.Item className="p-52">
        <Row xs={1} md={2} className="g-4">
          {arrayCountries.map((props) => {
            let photos = require(`../assets/${props.photo}`).default
            return (
              <Col className="col">
                <Card className="bg-purple-600 text-white">
                  <Card.Img
                    variant="top"
                    className="h-60 bg-cover"
                    src={photos}
                  />
                  <Card.Body className="color">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.country}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row xs={1} md={2} className="g-4">
          {arrayCountries2.map((props) => {
            let photos = require(`../assets/${props.photo}`).default
            return (
              <Col>
                <Card className="bg-purple-600 text-white">
                  <Card.Img
                    variant="top"
                    className="h-60 bg-cover"
                    src={photos}
                  />
                  <Card.Body className="color">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.country}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
      <Carousel.Item>
        <Row xs={1} md={2} className="g-4">
          {arrayCountries3.map((props) => {
            let photos = require(`../assets/${props.photo}`).default
            return (
              <Col>
                <Card className="bg-purple-600 text-white">
                  <Card.Img
                    variant="top"
                    className="h-60 bg-cover"
                    src={photos}
                  />
                  <Card.Body className="color">
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>{props.country}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselB;
