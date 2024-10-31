const mongoose = require("mongoose");

const pestSchema = new mongoose.Schema({
  color: String,
  description: String,
  size: String,
  type: String,
  imageUrl: String
});

const PestData = mongoose.model("PestData", pestSchema);

module.exports = PestData;
