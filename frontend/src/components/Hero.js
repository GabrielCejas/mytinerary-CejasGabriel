import React from "react";
import ButtonWelcome from "../components/ButtonWelcome";

function Hero(){
    return(
        <div className="img">
          <h2 className="welcome">MyTinerary!</h2>
          <h3 className="welcome">
            "Find your perfect trip, designed by insiders who know and love
            their cities!".
          </h3>
          <ButtonWelcome />
        </div>
    )
}

export default Hero;