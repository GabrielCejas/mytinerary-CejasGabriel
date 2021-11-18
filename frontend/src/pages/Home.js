import React from "react";
import { Component } from "react";
import NavBar from "../components/NavBar";
import Hero from "../components/Hero"
import CarouselB from "../components/CarouselB";
import Footer from "../components/Footer"

class Home extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Hero/>
        <div className="popularTineraries">
          <h3>Popular MYtineraries</h3>
        </div>
        <CarouselB />
        <Footer/>
      </>
    );
  }
}

export default Home;
