const mongoose = require('mongoose');

const HologramSchema = new mongoose.Schema({
    name: { type: String, required: true },
    weight: { type: Number, required: true },
    superpower: { type: String, required: true },
    extinctSince: { type: String, required: true },
});

module.exports = mongoose.model('Hologram', HologramSchema);