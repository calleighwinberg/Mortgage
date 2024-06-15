const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TCASchema = new Schema({
    name: String,
    description: String, 
})

module.exports = mongoose.model('TCA', TCASchema)