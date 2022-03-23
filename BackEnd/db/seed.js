const mongoose = require("./connection");
const itemData = require("./itemData.json");
const collectionData = require("./collectionData.json");
const Item = require("../models/Item");
const Collection = require("../models/Collection");

Item.deleteMany({}).then(() => {
  Item.insertMany(itemData)
    .then((item) => {
      console.log("We have a collectable!!", itemData);
    })
    .catch(console.error);
});

Collection.deleteMany({}).then(() => {
  Collection.insertMany(collectionData)
    .then((Collection) => {
      console.log("We have a collection!!", collectionData);
    })
    .catch(console.error)
    .finally(() => {
      process.exit();
    });
});
