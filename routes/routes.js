const express = require("express")
const router = express.Router()
const citiesControllers = require("../controllers/citiesControllers")


router.route("/cities")
  .get(citiesControllers.getCities)
  .post(citiesControllers.loadcities);
router.route("/city/:id")
  .get(citiesControllers.getUniqueCity)

module.exports = router;
