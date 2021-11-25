import React from "react";
import { Card, Col, Row } from "react-bootstrap/";
import { Carousel } from "react-bootstrap/";


function CardCarousel(props) {
  const { arrayCountries } = props;
  return (
    <Carousel className="my-5 Carousel" fade>
      {arrayCountries.map((city) => {
        return (
          <Carousel.Item>
            <Row xs={1} md={2} className="g-4">
              {city.map((array) => {
                let photos = require(`../assets/${array.photo}`).default;
                return (
                  <Col className="col">
                    <Card className="bg-purple-600 text-white">
                      <Card.Img
                        variant="top"
                        className="h-60 bg-cover"
                        src={photos}
                      />
                      <Card.Body className="color">
                        <Card.Title>{array.name}</Card.Title>
                        <Card.Text>{array.country}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                );
              })}
              ;
            </Row>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
export default CardCarousel;
