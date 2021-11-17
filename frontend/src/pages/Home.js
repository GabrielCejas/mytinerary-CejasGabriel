import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import ButtonWelcome from "../components/ButtonWelcome";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <div className="img">
          <h2 className="welcome">MyTinerary!</h2>
          <h3 className="welcome">
            "Find your perfect trip, designed by insiders who know and love
            their cities!".
          </h3>
          <ButtonWelcome/>
        </div>
      </>
    );
  }
}

export default Home;
