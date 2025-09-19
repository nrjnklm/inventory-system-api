const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Item = require('../model/model')

router.post("/items", async (req,res)=>{
    try{
        const {name,quantity,price} = req.body
        if (!name || !price) {
            return res.status(400).json({ error: 'name and price is required' });
        }
        const item = await Item.create({ name: name, quantity: !quantity ? 0 : quantity, price: price });
        return res.status(201).json(item);
    }catch(err){
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
})

router.put('/items/:id',async(req,res)=>{
    try{
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });
        const updated = await Item.findByIdAndUpdate(id, req.body, { new: true, runValidators: true });
        if (!updated) return res.status(404).json({ error: 'Item not found' });
        return res.status(200).json(updated);
    }catch(err){
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
})

router.delete('/items/:id', async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ error: 'Invalid ID' });

    const deleted = await Item.findByIdAndDelete(id);
    if (!deleted) return res.status(404).json({ error: 'Item not found' });
    return res.status(204).send();
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;