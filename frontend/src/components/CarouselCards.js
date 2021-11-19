import React from "react";
import { Carousel } from "react-bootstrap/";
import CardCarousel from "./CardCarousel"

function CarouselCards() {
  const arrayCountries = [
    { name: "Berlin", country: "Germany", photo: "berlin.jpg" },
    { name: "London", country: "England", photo: "londres.jpg" },
    { name: "Paris", country: "France", photo: "paris.jpg" },
    { name: "Moscow", country: "Russia", photo: "moscu.jpg" },
  ];
  const arrayCountries2 = [
    { name: "Lisbon", country: "Portugal", photo: "lisboa.jpg" },
    { name: "Tokyo", country: "Japan", photo: "tokio.jpg" },
    { name: "Vienna", country: "Austria", photo: "viena.jpg" },
    { name: "Washinton", country: "EEUU", photo: "washinton.jpg" },
  ];
  const arrayCountries3 = [
    { name: "Nueva York", country: "EEUU", photo: "nuevaYork.jpg" },
    { name: "Athens", country: "Greece", photo: "grecia.jpg" },
    { name: "Madrid", country: "Spain", photo: "madrid.jpg" },
    { name: "Zurich", country: "Switzerland ", photo: "zurich.jpg" },
  ];

  return (
    <Carousel className="my-5 Carousel">
      <Carousel.Item className="p-52">
        <CardCarousel arrayCountries={arrayCountries}/>
      </Carousel.Item>
      <Carousel.Item>
        <CardCarousel arrayCountries={arrayCountries2}/>
      </Carousel.Item>
      <Carousel.Item>
        <CardCarousel arrayCountries={arrayCountries3}/>
      </Carousel.Item>
    </Carousel>
  );
}
export default CarouselCards;
