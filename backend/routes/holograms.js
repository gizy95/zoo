const express = require('express');
const router = express.Router();
const Hologram = require('../models/Hologram.js'); 

// Get all 
router.get('/', async (req, res) => {
    try {
        const holograms = await Hologram.find();
        res.json(holograms);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Add new
router.post('/', async (req, res) => {
    const newHologram = new Hologram(req.body);
    try {
        const savedHologram = await newHologram.save();
        res.status(201).json(savedHologram);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update
router.put('/:id', async (req, res) => {
    try {
        const updatedHologram = await Hologram.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedHologram);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete 
router.delete('/:id', async (req, res) => {
    try {
        await Hologram.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
