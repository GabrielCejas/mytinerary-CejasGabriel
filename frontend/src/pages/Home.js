import React from "react";
import { Component } from "react";
import Hero from "../components/Hero";
import CarouselCards from "../components/CarouselCards";
import TitleCities from "../components/TitleCities";

class Home extends Component {
  render() {
    return (
      <>
        <Hero />
        <TitleCities />
        <CarouselCards />
      </>
    );
  }
}

export default Home;
