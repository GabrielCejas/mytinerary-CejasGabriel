const express = require("express");
const router = express.Router();
const passport = require("passport");
const citiesControllers = require("../controllers/citiesControllers");
const itinerariesControllers = require("../controllers/itinerariesControllers");
const userController = require("../controllers/userControllers");
const validator = require("../controllers/validator")
const { getCities, uploadCities, getUniqueCity, deleteCity, changeCity } =
  citiesControllers;
const { getItineraries, uploadItineraries, getUniqueItinerary, deleteItinerary, changeItinerary, getItineraryByCity } = itinerariesControllers;
const activitiesController = require("../controllers/activitiesController")


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
  .route("/itinerary/like/:id")
  .put(passport.authenticate('jwt', {session:false}),
    itinerariesControllers.likeItinerary)
  
router
  .route("/itinerary/comments/:id")
  .put(passport.authenticate('jwt', {session:false}),
    itinerariesControllers.modifyComment) 

router.route('/activities/:id')
    .get(activitiesController.getActivitiesItinerary)
      
router
    .route('/activities')
    .post(activitiesController.addActivities)
      
router
    .route('/activity/:id')
    .get(activitiesController.getOneActivity)
    .delete(activitiesController.deleteActivity)
    .put(activitiesController.editActivity)

router
  .route("/user/signup")
  .post(validator, userController.newUser)
router
  .route("/user/signin")
  .post(userController.logUser)

router
  .route ("/user/verifyToken")
  .get(passport.authenticate('jwt', {session:false}), userController.verifyToken)

module.exports = router;
