const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const userController = require("../controllers/userControllers");
const { getCities, uploadCities, getUniqueCity, deleteCity, changeCity } =
  citiesControllers;
const { getItineraries, uploadItineraries, getUniqueItinerary, deleteItinerary, changeItinerary, getItineraryByCity } = itinerariesControllers;


router
  .route("/cities")
  .get(getCities)
  .post(uploadCities);
router
  .route("/cities/:id")
  .get(getUniqueCity)
  .delete(deleteCity)
  .put(changeCity);
router
  .route("/itinerary/cities/:id")
  .get(getItineraryByCity)
router
  .route("/itinerary")
  .get(getItineraries)
  .post(uploadItineraries);
router
  .route("/itinerary/:id")
  .get(getUniqueItinerary)
  .delete(deleteItinerary)
  .put(changeItinerary)

router
  .route("/user/signup")
  .post(userController.newUser)
router
  .route("/user/signin")
  .post(userController.logUser)

module.exports = router;
