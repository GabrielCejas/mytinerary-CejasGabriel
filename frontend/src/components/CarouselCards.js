import React from "react";
import CardCarousel from "./CardCarousel";

function CarouselCards() {
  const arrayCountries = [
    [
      { name: "Berlin", country: "Germany", photo: "berlin.jpg" },
      { name: "London", country: "England", photo: "londres.jpg" },
      { name: "Paris", country: "France", photo: "paris.jpg" },
      { name: "Moscow", country: "Russia", photo: "moscu.jpg" },
    ],
    [
      { name: "Lisbon", country: "Portugal", photo: "lisboa.jpg" },
      { name: "Tokyo", country: "Japan", photo: "tokio.jpg" },
      { name: "Vienna", country: "Austria", photo: "viena.jpg" },
      { name: "Washinton", country: "EEUU", photo: "washinton.jpg" },
    ],
    [
      { name: "Nueva York", country: "EEUU", photo: "nuevaYork.jpg" },
      { name: "Athens", country: "Greece", photo: "grecia.jpg" },
      { name: "Madrid", country: "Spain", photo: "madrid.jpg" },
      { name: "Zurich", country: "Switzerland ", photo: "zurich.jpg" },
    ],
  ];

  return (
    <CardCarousel arrayCountries={arrayCountries} />
  );
}
export default CarouselCards;
