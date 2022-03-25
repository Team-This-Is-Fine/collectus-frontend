const mongoose = require("./connection");
const collectionData = require("./collectionData.json");
const Collection = require("../models/Collection");

Collection.deleteMany({}).then(() => {
  Collection.insertMany(collectionData)
    .then((data) => {
      console.log("We have a collection!!", data);
    })
    .catch(console.error)
    .finally(() => {
      process.exit();
    });
});
