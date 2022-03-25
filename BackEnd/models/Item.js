const mongoose = require("../db/connection");

const ItemSchema = new mongoose.Schema({
  name: String,
  img: String,
  description: String,
  duplicates: Number,
});

module.exports = ItemSchema;
