const express = require('express');
const { collection } = require('../models/Collection');
const Collection = require('../models/Collection');
const Item = require('../models/Item');

const router = express.Router();

router.post("/collections/:id", (req, res, next) =>
{
    const newItem = req.body;
    Collection.findById(req.params.id)
        .then((collection) =>
        {
            collection.item.push(newItem);

			return collection.save();
		})
		.then((collection) => res.status(201).json(collection))
		.catch(next);
});

router.put("/collections/:id", (req, res, next) =>
{
    const id = req.params.id;
    const itemData = req.body
    Collection.findOne({ 'item._id': id })
        .then((collection) =>
        {
            const item = collection.item.id(id);
            item.set(itemData);
            return collection.save();
        }).then(() =>
            res.sendStatus(200)).catch(next); 
})

router.delete("/collections/:id/:itemsId", async (req, res, next) =>
{
    Collection.findByIdAndUpdate(
        { _id: req.params.id},
        { $pull: { item: {_id: req.params.itemsId}}},
        {new: true},
        function(err){
            if (err) {console.log(err)}
        },
    )
     
});

module.exports = router;
