import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero";
import CarouselCards from "../components/CarouselCards";
import Footer from "../components/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero />
        <div className="popularTineraries">
          <h3>Popular MyTineraries</h3>
        </div>
        <CarouselCards />
        <Footer />
      </>
    );
  }
}

export default Home;
