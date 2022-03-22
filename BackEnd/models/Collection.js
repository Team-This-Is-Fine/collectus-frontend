const mongoose = require ('../db/connection');
const ItemSchema = require('./Item')

const collectionSchema = new mongoose.Schema({
    name: String,
    img: String,
    collectionSize: Number
});

const Collection = mongoose.model("Collection", collectionSchema);

module.exports = Collection;