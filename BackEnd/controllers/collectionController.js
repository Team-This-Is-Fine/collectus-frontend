const express = require("express");
const router = express.Router();

const Collection = require("../models/Collection");

router.get("/", (req, res) => {
  Collection.find().then((collections) => {
    res.json(collections);
  });
});

router.post("/", (req, res) => {
  const newCollection = req.body;
  Collection.create(newCollection).then((collection) => {
    res.json(collection);
  });
});

router.get("/:id", async (req, res) => {
  try {
    const collect = await Collection.findById(req.params.id);
    if (collect) {
      res.json(collect);
    } else {
      res.sendStatus(404);
    }
  } catch (error) {
    console.log(error);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const updatedCollection = req.body;
    const updatedDocument = await Collection.findByIdAndUpdate(
      req.params.id,
      updatedCollection,
      { new: true }
    );
    res.json(updatedDocument);
  } catch (error) {
    console.log(error);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const collectionToDelete = await Collection.findByIdAndDelete(
      req.params.id
    );
    res.json(collectionToDelete);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
