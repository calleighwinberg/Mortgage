const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TCASchema = new Schema({
    firstName: String,
    lastName: String, 
    address: String,
    description: String, 
    test: String,
    scenarioone: {
        name: String,
        price: Number,
        downPayment: Number,
        rate: Number,
        term: Number},
    cc1: {
        aprCosts: Number,
        points: Number,
        escrowFees: Number, 
        noAPRcosts: Number, 
        contribution: Number},
    mc1: {
        hoa: Number, 
        hazIns: Number,
        taxes: Number,
        pmi: Number},


    scenariotwo: {
        name: String,
        price: Number,
        downPayment: Number,
        rate: Number,
        term: Number},
    cc2: {
        aprCosts: Number,
        points: Number,
        escrowFees: Number, 
        noAPRcosts: Number, 
        contribution: Number},
    mc2: {
        hoa: Number, 
        hazIns: Number,
        taxes: Number,
        pmi: Number},

    scenariothree: {
        name: String,
        price: Number,
        downPayment: Number,
        rate: Number,
        term: Number},
    cc3: {
        aprCosts: Number,
        points: Number,
        escrowFees: Number, 
        noAPRcosts: Number, 
        contribution: Number},
    mc3: {
        hoa: Number, 
        hazIns: Number,
        taxes: Number,
        pmi: Number},
})

module.exports = mongoose.model('TCA', TCASchema)