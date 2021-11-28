const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
  name: { type: String, required: true },
  country: { type: String },
  description: { type: String },
  photo: { type: String, required: true },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
