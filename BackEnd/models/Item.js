const mongoose = require("../db/connection");

const ItemSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  duplicates: Number,
});

// const Item= mongoose.model("Review", reviewSchema)

module.exports = ItemSchema;
