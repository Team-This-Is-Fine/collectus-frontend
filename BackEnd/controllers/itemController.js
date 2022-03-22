const express = require('express');
const Item = require('../models/Item');

const router = express.Router();


router.get('/', (req, res) => {
    Item.find().then((items) => {
        res.json(items);
    })
})


router.post('/', (req,res) => {
    const newItem = req.body;
    Item.create(newItem).then(item => {
        res.json(item);
    })
})


router.get('/:id', async (req,res) => {
	try {
		const item = await Item.findById(req.params.id);
    if(item){
        res.json(item);
    } else {
        res.sendStatus(404);
    }
	} catch (error) {
		console.log(error);
	}
});


router.put('/:id', async (req,res) => {
    try {
        const updatedItem = req.body;
        const updatedDocument =  await Item.findByIdAndUpdate(req.params.id, updatedItem, 
        {new: true}
        );
        res.json(updatedDocument);
    } catch (error) {
        console.log(error);
    }
}) 


router.delete('/:id', async (req, res) => {
    try {
        const ItemToDelete = await Item.findByIdAndDelete(req.params.id);
        res.json(ItemToDelete);
    } catch (error) {
        console.log(error);
    }
})

module.exports = router;