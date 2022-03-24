const mongoose = require("../db/connection");

const itemSchema = require("./Item");

const collectionSchema = new mongoose.Schema({
  name: String,
  img: String,
  collectionSize: Number,
  //   list: [
  //     {
  //       type: mongoose.Schema.Types.ObjectId,
  //       ref: "Item",
  //       //   required: true,
  //     },
  //   ],

  item: [itemSchema],
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;
