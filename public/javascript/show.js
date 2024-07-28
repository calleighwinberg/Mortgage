//const TCA = require('./models/tca');

//check is value is null or undefined 
function checkNull(val) {
    if (val === undefined || val === null) {
        return 0;
    } else {
        return val;
    }
}

//function to compute the money format
function format(val) {
    val = checkNull(val);
    return "$" + val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//function to compute principal and interest 
function computePI(price, down, rate, term) {
    if (term == 0) {
        return 0;  
    }
    if (rate == 0) {
        return (price - down) / term;  
    }
    var i = (rate * .01) / 12;
    var monthlyInt = Math.pow((i + 1), term);
    var totalPayment = (price - down) * ((i * monthlyInt) / (monthlyInt - 1));
    var result = Math.round(totalPayment * 100) / 100;
    return result;
}

//function to compute princial, interest, taxes, and insurance 
function computePITI(pi, taxes, insurance, hoa, mi) {
    return pi + taxes + insurance + hoa + mi
}

//compute discount points for the loan
function computePoints(points, loan) {
    return (points * .01) * loan;
}

//calculate total cash to close needed 
function computeCashToClose(down, aprCosts, points, escrowFees, noAPRcosts, contribution) {
    var ctc = down + aprCosts + points + escrowFees + noAPRcosts - contribution;
    return ctc;
}


//calculation monthly savings
function monthlySavings(piti1, piti2, piti3) {
    max = Math.max(piti1, piti2, piti3)
    document.getElementById('difference1').innerHTML = format(max - piti1) ;
    document.getElementById('difference2').innerHTML = format(max - piti2) ;
    document.getElementById('difference3').innerHTML = format(max - piti3) ;
    if ((max - piti1) <= 0) {
        document.getElementById('difference1').style.color = "red" ;
    } else {
        document.getElementById('difference1').style.color = "green" ;
    }
    if ((max - piti2) <= 0) {
        document.getElementById('difference2').style.color = "red" ;
    } else {
        document.getElementById('difference2').style.color = "green" ;
    }
    if ((max - piti3) <= 0) {
        document.getElementById('difference3').style.color = "red" ;
    } else {
        document.getElementById('difference3').style.color = "green" ;
    }
}

function computeS1() {
    var loan = tca.scenarioone.price - tca.scenarioone.downPayment;
    document.getElementById('price1').innerHTML = format(tca.scenarioone.price);
    document.getElementById('loan1').innerHTML = format(loan);
    document.getElementById('rate1').innerHTML = checkNull(tca.scenarioone.rate).toFixed(3).toString() + "%";
    document.getElementById('term1').innerHTML = checkNull(tca.scenarioone.term);

    var pi = computePI(checkNull(tca.scenarioone.price), checkNull(tca.scenarioone.downPayment),
        checkNull(tca.scenarioone.rate), checkNull(tca.scenarioone.term));
    var piti = computePITI(pi, checkNull(tca.mc1.hoa), checkNull(tca.mc1.hazIns), checkNull(tca.mc1.taxes), checkNull(tca.mc1.pmi));
    document.getElementById('payment1').innerHTML = format(piti);

    points = computePoints(tca.cc1.points, loan);
    var ctc = computeCashToClose(tca.scenarioone.downPayment, tca.cc1.aprCosts, points,
        tca.cc1.escrowFees, tca.cc1.noAPRcosts, tca.cc1.contribution);
    document.getElementById('ctc1').innerHTML = format(ctc);

    computeS1MoreInfo(pi, piti, points, ctc)
    return piti ;
}

function computeS1MoreInfo(pi, piti, points, ctc) {

    //payment breakdown
    document.getElementById('p1').innerHTML = format(tca.scenarioone.price);
    document.getElementById('pi1').innerHTML = format(pi);
    document.getElementById('ins1').innerHTML = format(tca.mc1.hazIns);
    document.getElementById('tax1').innerHTML = format(tca.mc1.taxes);
    document.getElementById('mi1').innerHTML = format(tca.mc1.pmi);
    document.getElementById('hoa1').innerHTML = format(tca.mc1.hoa);
    document.getElementById('piti1').innerHTML = format(piti);

    //closing costs
    document.getElementById('d1').innerHTML = format(tca.scenarioone.downPayment) ;
    if (tca.scenarioone.price == 0) {
        ltv = 0 ;
    } else{
        ltv = checkNull((1 - (tca.scenarioone.downPayment / tca.scenarioone.price)) * 100)
    }
    document.getElementById('ltv1').innerHTML = ltv.toFixed(3).toString() + "%";
    document.getElementById('apr1').innerHTML = format(tca.cc1.aprCosts);
    document.getElementById('noApr1').innerHTML = format(tca.cc1.noAPRcosts);
    document.getElementById('points1').innerHTML = format(points);
    document.getElementById('escrow1').innerHTML = format(tca.cc1.escrowFees);
    document.getElementById('cont1').innerHTML = format(tca.cc1.contribution);
    document.getElementById('total1').innerHTML = format(ctc);

    document.getElementById('hoa1').innerHTML = format(tca.mc1.hoa);
}




function computeS2() {
    var loan = tca.scenariotwo.price - tca.scenariotwo.downPayment;
    document.getElementById('price2').innerHTML = format(tca.scenariotwo.price);
    document.getElementById('loan2').innerHTML = format(loan);
    document.getElementById('rate2').innerHTML = checkNull(tca.scenariotwo.rate).toFixed(3).toString() + "%";
    document.getElementById('term2').innerHTML = checkNull(tca.scenariotwo.term);

    var pi = computePI(checkNull(tca.scenariotwo.price), checkNull(tca.scenariotwo.downPayment),
        checkNull(tca.scenariotwo.rate), checkNull(tca.scenariotwo.term));
    console.log(pi)
    
    var piti = computePITI(pi, checkNull(tca.mc2.hoa), checkNull(tca.mc2.hazIns), checkNull(tca.mc2.taxes), checkNull(tca.mc2.pmi));
    document.getElementById('payment2').innerHTML = format(piti);
    console.log(piti)

    points = computePoints(tca.cc2.points, loan);
    var ctc = computeCashToClose(tca.scenariotwo.downPayment, tca.cc2.aprCosts, points,
        tca.cc2.escrowFees, tca.cc2.noAPRcosts, tca.cc2.contribution);
    document.getElementById('ctc2').innerHTML = format(ctc);

    computeS2MoreInfo(pi, piti, points, ctc);
    return piti ; 
}

function computeS2MoreInfo(pi, piti, points, ctc) {
    //payment breakdown
    document.getElementById('p2').innerHTML = format(tca.scenariotwo.price);
    document.getElementById('pi2').innerHTML = format(pi);
    document.getElementById('ins2').innerHTML = format(tca.mc2.hazIns);
    document.getElementById('tax2').innerHTML = format(tca.mc2.taxes);
    document.getElementById('mi2').innerHTML = format(tca.mc2.pmi);
    document.getElementById('hoa2').innerHTML = format(tca.mc2.hoa);
    document.getElementById('piti2').innerHTML = format(piti);

    //closing costs
    document.getElementById('d2').innerHTML = format(tca.scenariotwo.downPayment);
    if (tca.scenariotwo.price == 0) {
        ltv = 0 ;
    } else{
        ltv = checkNull((1 - (tca.scenariotwo.downPayment / tca.scenariotwo.price)) * 100)
    }
    document.getElementById('ltv2').innerHTML = ltv.toFixed(3).toString() + "%";
    document.getElementById('apr2').innerHTML = format(tca.cc2.aprCosts);
    document.getElementById('noApr2').innerHTML = format(tca.cc2.noAPRcosts);
    document.getElementById('points2').innerHTML = format(points);
    document.getElementById('escrow2').innerHTML = format(tca.cc2.escrowFees);
    document.getElementById('cont2').innerHTML = format(tca.cc2.contribution);
    document.getElementById('total2').innerHTML = format(ctc);

    document.getElementById('hoa2').innerHTML = format(tca.mc2.hoa);
}


function computeS3() {
    var loan = tca.scenariothree.price - tca.scenariothree.downPayment;
    document.getElementById('price3').innerHTML = format(tca.scenariothree.price);
    document.getElementById('loan3').innerHTML = format(loan);
    document.getElementById('rate3').innerHTML = checkNull(tca.scenariothree.rate).toFixed(3).toString() + "%";
    document.getElementById('term3').innerHTML = checkNull(tca.scenariothree.term);

    var pi = computePI(checkNull(tca.scenariothree.price), checkNull(tca.scenariothree.downPayment),
        checkNull(tca.scenariothree.rate), checkNull(tca.scenariothree.term));

    var piti = computePITI(pi, checkNull(tca.mc3.hoa), checkNull(tca.mc3.hazIns), checkNull(tca.mc3.taxes), checkNull(tca.mc3.pmi));
    document.getElementById('payment3').innerHTML = format(piti);

    points = computePoints(tca.cc3.points, loan);
    var ctc = computeCashToClose(tca.scenariothree.downPayment, tca.cc3.aprCosts, points,
        tca.cc3.escrowFees, tca.cc3.noAPRcosts, tca.cc3.contribution);
    document.getElementById('ctc3').innerHTML = format(ctc);

    computeS3MoreInfo(pi, piti, points, ctc);
    return piti ;
}

function computeS3MoreInfo(pi, piti, points, ctc) {
    //payment breakdown
    document.getElementById('p3').innerHTML = format(tca.scenariothree.price);
    document.getElementById('pi3').innerHTML = format(pi);
    document.getElementById('ins3').innerHTML = format(tca.mc3.hazIns);
    document.getElementById('tax3').innerHTML = format(tca.mc3.taxes);
    document.getElementById('mi3').innerHTML = format(tca.mc3.pmi);
    document.getElementById('hoa3').innerHTML = format(tca.mc3.hoa);
    document.getElementById('piti3').innerHTML = format(piti);

    //closing costs
    document.getElementById('d3').innerHTML = format(tca.scenariothree.downPayment);
    if (tca.scenariothree.price == 0) {
        ltv = 0 ;
    } else{
        ltv = checkNull((1 - (tca.scenariothree.downPayment / tca.scenariothree.price)) * 100) ;
    }
    document.getElementById('ltv3').innerHTML = ltv.toFixed(3).toString() + "%";
    document.getElementById('apr3').innerHTML = format(tca.cc3.aprCosts);
    document.getElementById('noApr3').innerHTML = format(tca.cc3.noAPRcosts);
    document.getElementById('points3').innerHTML = format(points);
    document.getElementById('escrow3').innerHTML = format(tca.cc3.escrowFees);
    document.getElementById('cont3').innerHTML = format(tca.cc3.contribution);
    document.getElementById('total3').innerHTML = format(ctc);

    document.getElementById('hoa3').innerHTML = format(tca.mc3.hoa);
}


function computeAll() {
    piti1 = computeS1();
    piti2 = computeS2();
    piti3 = computeS3();
    monthlySavings(piti1, piti2, piti3) ;
}

//document.getElementById('payment').innerHTML = computePI()