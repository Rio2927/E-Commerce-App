const mongoose = require('mongoose');

const mobileSchema = new mongoose.Schema({
    brand: { type: String, required: true },
    model: { type: String, required: true },
    release_date: { type: Number, required: true },
}, { versionKey: false });

module.exports = mongoose.model('Mobile', mobileSchema);
