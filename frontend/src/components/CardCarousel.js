import React from "react";
import { Card, Col, Row } from "react-bootstrap/";

function CardCarousel(props){
    return(
        <Row xs={1} md={2} className="g-4">
        {props.arrayCountries.map((array) => {
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
      </Row>
    )
}
export default CardCarousel;