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
        term: Number,
        aprCosts: Number,
        points: Number,
        prepaidInterest: Number,
        escrowFees: Number, 
        noAPRcosts: Number, 
        contribution: Number,
        hoa: Number, 
        hazIns: Number,
        taxes: Number,
        pmi: Number
        
    },
    scenariotwo: {
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
    }
})

module.exports = mongoose.model('TCA', TCASchema)