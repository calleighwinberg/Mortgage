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
        price: { type: Number, default: 0 },
        downPayment: { type: Number, default: 0 },
        rate: { type: Number, default: 0 },
        term: { type: Number, default: 0 }
    },
    cc1: {
        aprCosts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        escrowFees: { type: Number, default: 0 },
        noAPRcosts: { type: Number, default: 0 },
        contribution: { type: Number, default: 0 }
    },
    mc1: {
        hoa: { type: Number, default: 0 },
        hazIns: { type: Number, default: 0 },
        taxes: { type: Number, default: 0 },
        pmi: { type: Number, default: 0 }
    },


    scenariotwo: {
        name: String,
        price: { type: Number, default: 0 },
        downPayment: { type: Number, default: 0 },
        rate: { type: Number, default: 0 },
        term: { type: Number, default: 0 }
    },
    cc2: {
        aprCosts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        escrowFees: { type: Number, default: 0 },
        noAPRcosts: { type: Number, default: 0 },
        contribution: { type: Number, default: 0 }
    },
    mc2: {
        hoa: { type: Number, default: 0 },
        hazIns: { type: Number, default: 0 },
        taxes: { type: Number, default: 0 },
        pmi: { type: Number, default: 0 }
    },

    scenariothree: {
        name: String,
        price: { type: Number, default: 0 },
        downPayment: { type: Number, default: 0 },
        rate: { type: Number, default: 0 },
        term: { type: Number, default: 0 }
    },
    cc3: {
        aprCosts: { type: Number, default: 0 },
        points: { type: Number, default: 0 },
        escrowFees: { type: Number, default: 0 },
        noAPRcosts: { type: Number, default: 0 },
        contribution: { type: Number, default: 0 }
    },
    mc3: {
        hoa: { type: Number, default: 0 },
        hazIns: { type: Number, default: 0 },
        taxes: { type: Number, default: 0 },
        pmi: { type: Number, default: 0 }
    }
})

module.exports = mongoose.model('TCA', TCASchema)