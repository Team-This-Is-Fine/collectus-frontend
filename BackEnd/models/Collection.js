const mongoose = require("../db/connection");

const itemSchema = require("./Item");

const collectionSchema = new mongoose.Schema({
  name: String,
  img: String,
  collectionSize: Number,


  item: [itemSchema],
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
