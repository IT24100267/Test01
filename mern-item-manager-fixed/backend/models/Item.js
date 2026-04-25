const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  district: String
});

module.exports = mongoose.model("Item", ItemSchema);
