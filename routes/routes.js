const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const { getCities, loadcities, getUniqueCity, deleteCity, changeCity } = citiesControllers;

router.route("/cities").get(getCities).post(loadcities);
router.route("/cities/:id").get(getUniqueCity).delete(deleteCity).put(changeCity);

module.exports = router;
