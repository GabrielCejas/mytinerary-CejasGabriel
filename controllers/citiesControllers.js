
const City = require("../models/City");

const citiesControllers = {
  getCities: (req, res) => {
    City.find()
    .then((response) => res.json({ response }))
    .catch((err) => console.log(err));
  },
  uploadCities: (req, res) => {
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
  deleteCity: async(req, res) => {
    let city
    const id = req.params.id
    try{
      city = await City.findOneAndDelete({_id:id})
    }catch(error){
      console.log(error)
    }
    res.json({response:city, success:true})
  },
  changeCity: async(req, res) => {
    let id = req.params.id
    let city = req.body
    try{
      await City.findOneAndUpdate({_id:id}, {...city})
    }catch(error){
      console.log(error)
    }
  },
};

module.exports = citiesControllers;


