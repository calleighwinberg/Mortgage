const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TCASchema = new Schema({
    firstName: String,
    lastName: String, 
    address: String,
    description: String, 
})

module.exports = mongoose.model('TCA', TCASchema)