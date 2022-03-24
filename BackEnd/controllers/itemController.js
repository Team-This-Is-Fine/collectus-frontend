const express = require("express");
const { collection } = require("../models/Collection");
// const { collection } = require("../db/connection");
const Collection = require("../models/Collection");
const Item = require("../models/Item");

const router = express.Router();

// router.get("/collections", (req, res) => {
//   Collection.find().then((items) => {
//     res.json(items);
//   });
// });

router.post("/collections/:id", (req, res, next) => {
  const newItem = req.body;
  // const collectionId = newItem.collectionId;
  Collection.findById(req.params.id)
    .then((collection) => {
      collection.item.push(newItem);

      return collection.save();
    })
    .then((collection) => res.status(201).json(collection))
    .catch(next);
});

// router.post("/", (req, res) => {
//   const newItem = req.body;
//   Item.create(newItem).then((item) => {
//     res.json(item);
//   });
// });

// router.get("/collections/:id", async (req, res) => {
//   try {
//     const item = await Collection.findById(req.params.id);
//     if (item) {
//       res.json(item);
//     } else {
//       res.sendStatus(404);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

router.put("/collections/:id", (req, res, next) => {
    const id = req.params.id;
    const itemData = req.body
    Collection.findOne({'item._id':id })
        .then((collection) => {
            const item = collection.item.id(id);
            item.set(itemData);
            return collection.save();
        }).then(() =>
            res.sendStatus(204)).catch(next); 
//     res.json(updatedDocument);
//   } catch (error) {
//     console.log(error);
//   }
})

router.delete("/collections/:id", (req, res, next) => {
    const id = req.params.id;
    Collection.findOne({ 'item._id': id }).then((collection) => {
        collection.item.id(id).remove();
        return collection.save();
    }).then(() => res.sendStatus(204)).catch(next);
});

module.exports = router;
