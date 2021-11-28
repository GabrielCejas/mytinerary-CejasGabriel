
const City = require("../models/City");

const citiesControllers = {
  getCities: (req, res) => {
    City.find()
    .then((response) => res.json({ response }));
  },
  loadcities: (req, res) => {
    const { name, country, description, photo } = req.body;
    new City({ name, country, description, photo })
      .save()
      .then((response) => res.json({ response }));
  },
  getUniqueCity: (req, res) => {
    const id = req.params.id;
    City.findOne({ _id: id })
      .then((response) => res.json({ response }))
      .catch((err) => console.log(err));
  },
  deletecity: (req, res) => {},
};

module.exports = citiesControllers;


