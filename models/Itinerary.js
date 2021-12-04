const mongoose = require("mongoose");

const itinerarySchema = new mongoose.Schema({
  nameItinerary: { type: String, required: true },
  namePerson: { type: String, required: true },
  photoPerson: { type: String },
  country: { type: String },
  description: { type: String },
  iLikeIt: { type: Number, required: true },
  price: { type: Number, required: true },
  hashtags: { type: Array },
  comments: { type: String },
  durattion: { type: Number, required: true },
  photo: { type: String, required: true },
  photo2: { type: String, required: true },
  photo3: { type: String, required: true },
  cities: {
    type: [{ type: mongoose.Types.ObjectId, ref: "city", required: true }],
  },
});

const Itinerary = mongoose.model("itinerary", itinerarySchema);

module.exports = Itinerary;
