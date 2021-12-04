const Itinerary = require("../models/Itinerary");

const itinerariesControllers = {
  getItineraries: async (req, res) => {
    let response;
    try {
      response = await Itinerary.find().populate("cities");
    } catch (err) {
      console.log(err);
    }
    res.json(response);
  },
  uploadItineraries: async (req, res) => {
    const itinerary = req.body;
    let response;
    try {
      response = await new Itinerary(itinerary).save();
    } catch (err) {
      console.log(err);
    }
    res.json(response);
  },
  getUniqueItinerary: (req, res) => {
    const id = req.params.id;
    Itinerary.findOne({ _id: id })
      .then((response) => res.json({ response }))
      .catch((err) => console.log(err));
  },
  getItineraryByCity: async(req, res) =>{
    const id = req.params.id;
    let itinerarios;
    try{
      itinerarios = await Itinerary.find({cities:id})
    }catch(err){
      console.error(err);
    }
    res.json({response:itinerarios, success:true});
  },
  deleteItinerary: async(req, res) => {
    let response
    const id = req.params.id
    try{
        response = await Itinerary.findOneAndDelete({_id:id})
    }catch(error){
      console.log(error)
    }
    res.json({response:response, success:true})
  },
  changeItinerary: async(req, res) => {
    let id = req.params.id
    let itinerary = req.body
    try{
      await Itinerary.findOneAndUpdate({_id:id}, {...itinerary})
    }catch(error){
      console.log(error)
    }
  },
};
module.exports = itinerariesControllers;
