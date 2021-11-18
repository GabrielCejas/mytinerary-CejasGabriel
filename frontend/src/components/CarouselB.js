import React from "react";
import imgBerlin from "../assets/berlin.jpg";
import imgLondres from "../assets/londres.jpg";
import imgParis from "../assets/paris.jpg";
import imgMoscu from "../assets/moscu.jpg";
import imgLisboa from "../assets/lisboa.jpg";
import imgTokio from "../assets/tokio.jpg";
import imgViena from "../assets/viena.jpg";
import imgWashinton from "../assets/washinton.jpg";
import imgNuevaYork from "../assets/nuevaYork.jpg"
import imgGrecia from "../assets/grecia.jpg";
import imgMadrid from "../assets/madrid.jpg";
import imgZurich from "../assets/zurich.jpg"

function CarouselB() {
  return (
  <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner m-5 d-flex align-items-center">
    <div class="carousel-item active">
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card w-75">
      <img src={imgBerlin} class="card-img-top img-fluid " alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Berlin</h5>
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="card w-75">
      <img src={imgLondres} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">London</h5>
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="card w-75">
      <img src={imgParis} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Paris</h5>
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="card w-75">
      <img src={imgMoscu} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Moscow</h5>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card w-75">
      <img src={imgLisboa} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Lisbon</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgTokio} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Tokyo</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgViena} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Viena</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgWashinton} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Washinton</h5>
      </div>
    </div>
  </div>
</div>
    </div>
    <div class="carousel-item">
    <div class="row row-cols-1 row-cols-md-2 g-4">
  <div class="col">
    <div class="card w-75">
      <img src={imgNuevaYork} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Nueva York</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgGrecia} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Greece</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgMadrid} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Madrid</h5>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card w-75">
      <img src={imgZurich} class="card-img-top img-fluid" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Zurich</h5>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}
export default CarouselB;
