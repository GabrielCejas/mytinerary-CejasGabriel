/* eslint-disable react/no-direct-mutation-state */
import React from "react";
import { Card, Container, Form, Alert } from "react-bootstrap/";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import citiesActions from "../redux/actions/citiesActions";

class CityCards extends React.Component {
    state ={
      filter: ""
    }
  componentDidMount() {
    this.props.fetchCities();
  }
  filterChanges(filter){
    console.log(filter)
    this.setState({
      filter: filter
    })
    this.props.filterCities(filter)

  }
  render() {
    return (
      <>
        <div className="pageCity">
          <h1>Cities</h1>
        </div>
        <Form className="col-xl-6 col-sm-4 col-5">
          <Form.Group className="mb-3">
            <Form.Label>Search for a city</Form.Label>
            <Form.Control
              type="text"
              value={this.state.filter}
              name ="name"
              onChange={(e) => { this.filterChanges(e.target.value) }}
              placeholder="Enter a city"
            />
          </Form.Group>
        </Form>
        {this.props.filteredCities.length > 0 ? (
          this.props.filteredCities.map((City) => {
            let photos = require(`../assets/${City.photo}`).default;
            return (
              <Container key={City.name}>
                <Card className="my-3">
                  <Card.Img variant="top" src={photos} />
                  <Card.Body>
                    <Card.Title>{City.name}</Card.Title>
                    <Card.Title>{City.country}</Card.Title>
                    <Card.Text className="mb-4">{City.description}</Card.Text>
                    <Link
                      className="buttonCities m-3"
                      to={`/Cities/${City._id}`}
                    >
                      Itineraries
                    </Link>
                  </Card.Body>
                </Card>
              </Container>
            );
          })
        ) : (
          <Alert className="col-xl-6" variant="warning">
            The city was not found
          </Alert>
        )}
      </>
    );
  }
}

const mapDispatchToProps = {
  fetchCities: citiesActions.fetchCities,
  filterCities: citiesActions.filterCities
};

const mapStateToProps = (state) => {
  return {
    cities: state.citiesReducer.cities,
    filteredCities: state.citiesReducer.filteredCities
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CityCards);
