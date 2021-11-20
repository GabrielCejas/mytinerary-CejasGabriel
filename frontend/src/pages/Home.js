import React from "react";
import { Component } from "react";
import Hero from "../components/Hero";
import CarouselCards from "../components/CarouselCards";

class Home extends Component {
  render() {
    return (
        <>
        <Hero />
        <div className="popularTineraries">
          <h3>Popular MyTineraries</h3>
        </div>
        <CarouselCards />
      </>
    );
  }
}

export default Home;
