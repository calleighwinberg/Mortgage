//const TCA = require('./models/tca');



function computePI(price, down, rate, term) {

    var i = (rate* .01) / 12 ;
    var monthlyInt = Math.pow((i+1), term);
    var totalPayment = (price-down) * ((i * monthlyInt) / (monthlyInt - 1));
    var result = Math.round(totalPayment*100)/100;
    
    return result 
}

function computePITI(pi, taxes, insurance, hoa, mi) {
    return pi+taxes+insurance+hoa+mi
}

function computeCashToClose(down, loan, aprCosts, points, escrowFees, noAPRcosts, contribution) {
    points = (points * .01) * loan ;
    var ctc = down+aprCosts+points+escrowFees+noAPRcosts-contribution ;
    return ctc ; 
}



function computeS1() {
    var loan = tca.scenarioone.price - tca.scenarioone.downPayment ;
    document.getElementById('price1').innerHTML =  "$" + tca.scenarioone.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById('loan1').innerHTML = "$" + loan.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    document.getElementById('rate1').innerHTML = tca.scenarioone.rate.toFixed(3).toString() + "%" ;
    document.getElementById('term1').innerHTML = tca.scenarioone.term ;

    var pi = computePI(tca.scenarioone.price, tca.scenarioone.downPayment, tca.scenarioone.rate, tca.scenarioone.term)
    var piti = computePITI(pi, tca.mc1.hoa, tca.mc1.hazIns, tca.mc1.taxes, tca.mc1.pmi)
    document.getElementById('payment1').innerHTML = "$" + piti.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    var ctc = computeCashToClose(tca.scenarioone.downPayment, loan, tca.cc1.aprCosts, tca.cc1.points, tca.cc1.escrowFees, tca.cc1.noAPRcosts, tca.cc1.contribution) ;
    document.getElementById('ctc1').innerHTML = "$" + ctc.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function computeAll() {
    computeS1()
}

//document.getElementById('payment').innerHTML = computePI()