const express = require("express");
const router = express.Router();
const citiesControllers = require("../controllers/citiesControllers");
const { getCities, loadcities, getUniqueCity, deletecity } = citiesControllers;

router.route("/cities").get(getCities).post(loadcities);
router.route("/cities/:id").get(getUniqueCity).delete(deletecity);

module.exports = router;
