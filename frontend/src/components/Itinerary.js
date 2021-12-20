/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Collapse, Alert } from "react-bootstrap/";
import { FcLike } from "react-icons/fc";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";
import itinerariesActions from "../redux/actions/itinerariesActions";
import Activities from "./Activities";

const Itinerary = (props) => {
  useEffect(() => {
    props.fetchCitiesID(props.params.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function Example(id) {
    const [open, setOpen] = useState(false);
    const [activities, setactivities] = useState([]);

    async function getActivities(id) {
      try {
        let respuesta = await props.getActivitiesItinerary(id);
        setactivities(respuesta);
        setOpen(!open);
      } catch (err) {
        console.log(err);
      }
    }

    return (
      <>
        <Button
          className=" btnItineray text-light bg-dark col-sm-4 col-8 col-xl-2 col-xxl-2"
          // eslint-disable-next-line no-sequences
          onClick={() => {
            getActivities(id.id);
          }}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          {open ? "View Less" : "View More"}
        </Button>
        <Collapse in={open} className="colorCollapse">
          <div id="example-collapse-text">
            {activities.length > 0 && <Activities activity={activities} />}
          </div>
        </Collapse>
      </>
    );
  }
  return (
    <>
      {props.itinerary.length > 0 ? (
        <>
          <div className="imgItinerayDiv">
            <img
              className="imgItineray"
              src={require(`../assets/${props.itinerary[0].photo}`).default}
            />
            <h2 className="h2Itineray">
              Available Itineraries for {props.itinerary[0].country}
            </h2>
          </div>
          {props.itinerary.map((itinerary, id) => {
            return (
              <>
                <Card
                  className="text-center col-xl-6 col-sm-8 col-sm-8 col-10 mb-4"
                  key={id}
                >
                  <Card.Header>{props.itinerary.nameItinerary}</Card.Header>
                  <Card.Body>
                    <Card.Title className="my-4">
                      {itinerary.nameItinerary}
                    </Card.Title>
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
                    <div>Price: {"💵".repeat(itinerary.price)}</div>
                    <div>Durattion: {itinerary.durattion}hs</div>
                  </Card.Footer>
                  <Card.Footer className="text-muted d-flex justify-content-around mb-2">
                    <div>
                      {itinerary.hashtags.map((hashtag, id) => {
                        return (
                          <p className="hashtag" key={id}>
                            {hashtag}
                          </p>
                        );
                      })}
                    </div>
                  </Card.Footer>
                  <Example id={itinerary._id} />
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
        className="my-3 text-light bg-dark btnItineray col-7 col-xs-8 col-sm-8 col-xl-2 col-xxl-1 "
        eventkey={2}
        as={Link}
        to="/Cities"
      >
        Back to Cities
      </Button>
    </>
  );
};

const mapDispatchToProps = {
  fetchCitiesID: citiesActions.fetchCitiesID,
  getActivitiesItinerary: itinerariesActions.getActivitiesItinerary,
};

const mapStateToProps = (state) => {
  return {
    itinerary: state.citiesReducer.itinerary,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Itinerary);
