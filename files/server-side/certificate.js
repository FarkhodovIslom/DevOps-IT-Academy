const mongoose = require('mongoose');

const certificateSchema = new mongoose.Schema({
    name: String,
    file: Buffer
});

const Certificate = mongoose.model('Certificate', certificateSchema);
module.exports = Certificate;
