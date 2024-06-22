const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scenario = new Schema({
    name: String,
    price: Number,
    downPayment: Number,
    rate: Number,
    term: Number
})