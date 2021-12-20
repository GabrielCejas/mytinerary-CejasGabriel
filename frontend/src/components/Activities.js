import { Carousel, Card } from "react-bootstrap/";

const Activities = (props) => {
  return (
    <Carousel fade>
      {props.activity.map((activity) => {
        return (
          <Carousel.Item key={activity.title}>
            <Card.Img
              variant="top"
              className="h-60 bg-cover"
              src={require(`../assets/${activity.photo}`).default}
            />

            <Carousel.Caption>
              <Card.Title>{activity.title}</Card.Title>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Activities;
