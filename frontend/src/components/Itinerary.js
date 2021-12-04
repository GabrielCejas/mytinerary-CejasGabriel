/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Collapse, Alert } from "react-bootstrap/";
import { FcLike, FcMoneyTransfer } from "react-icons/fc";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import citiesActions from "../redux/actions/citiesActions";

function Itinerary(props) {
  const { id } = useParams();

  useEffect(() => {
    props.fetchCitiesID(props.params.id);
  }, []);

  function Example() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button
          className=" btnItineray text-light bg-dark col-sm-4 col-8 col-xl-2 col-xxl-2"
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? "View Less" : "View More"}
        </Button>
        <Collapse in={open} className="colorCollapse">
          <div id="example-collapse-text">
            <img
              className="imgItineray img-fluid"
              src={require("../assets/enConstruccion.jpg").default}
            />
            The Brandenburg Gate (in German, Brandenburger Tor) is an ancient
            gateway to Berlin and one of the main symbols of both the city and
            Germany. It is not a triumphal arch, but it was the access, in the
            manner of propylaea, to the "New Berlin" of the time. It is located
            in the current center of the city, in the Paris Square, forming the
            end of the Unter den Linden avenue and marking the beginning of the
            great Tiergarten park and the Straße des . Juni. The Reichstag and
            Potsdamer Platz are also located nearby. Important events in
            Berlin's history that are connected with the Brandenburg Gate
          </div>
        </Collapse>
      </>
    );
  }
  return (
    <>
      {props.cities2.length > 0 ? (
        <>
          <div className="imgItinerayDiv">
            <img
              className="imgItineray"
              src={require(`../assets/${props.cities2[0].photo}`).default}
            />
            <h2 className="h2Itineray">
              Available Itineraries for {props.cities2[0].country}
            </h2>
          </div>
          {props.cities2.map((itinerary) => {
            return (
              <>
                <Card
                  className="text-center col-xl-6 col-sm-8 col-sm-8 col-10 mb-4"
                  key={itinerary.id}
                >
                  <Card.Header>{props.cities2.nameItinerary}</Card.Header>
                  <Card.Body>
                    <img
                      className="imgPerson"
                      src={
                        require(`../assets/${itinerary.photoPerson}`).default
                      }
                    />
                    <Card.Title></Card.Title>
                    <Card.Text>{itinerary.namePerson}</Card.Text>
                  </Card.Body>
                  <Card.Footer className="text-muted d-flex justify-content-around mb-2">
                    <div>
                      {itinerary.iLikeIt} <FcLike />
                    </div>
                    <div>
                      Price: {itinerary.price} <FcMoneyTransfer />
                    </div>
                    <div>Durattion: {itinerary.durattion}hs</div>
                  </Card.Footer>
                  <Card.Footer className="text-muted d-flex justify-content-around mb-2">
                    <div>
                      {itinerary.hashtags.map((hashtag) => {
                        return <p className="hashtag">{hashtag}</p>;
                      })}
                    </div>
                  </Card.Footer>
                  <Example />
                </Card>
              </>
            );
          })}
        </>
      ) : (
        <Alert className="col-xl-6 p-5 my-5" variant="warning">
          <p>There are no Itineraries yet for this city. </p>
          <p>Try another city!</p>
        </Alert>
      )}
      <Button
        className="my-3 text-light bg-dark btnItineray col-6 col-xs-8 col-sm-6 col-xl-2 col-xxl-1 "
        eventkey={2}
        as={Link}
        to="/Cities"
      >
        Back to Cities
      </Button>
    </>
  );
}

const mapDispatchToProps = {
  fetchCitiesID: citiesActions.fetchCitiesID,
};

const mapStateToProps = (state) => {
  return {
    cities2: state.citiesReducer.cities2,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
