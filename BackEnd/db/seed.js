const mongoose = require("./connection");
const itemData = require("./itemData.json");
const Item = require("../models/Item");

Item.deleteMany({}).then(() => {
  Item.insertMany(itemData)
    .then((item) => {
      console.log("We have a collectable!!", itemData);
    })
    .catch(console.error)
    .finally(() => {
      process.exit();
    });
});
