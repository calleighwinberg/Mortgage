const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scenario = new Schema({
    name: String,
    price: Number,
    downPayment: Number,
    rate: Number,
    term: Number,
    aprCosts: Number,
    points: Number,
    prepaidInterest: Number,
    escrowFees: Number, 
    noAPRcosts: Number, 
    hoa: Number, 
    hazIns: Number,
    taxes: Number,
    pmi: Number
})