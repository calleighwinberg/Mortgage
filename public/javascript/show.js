//const TCA = require('./models/tca');

function checkNull(val) {
    if (val == null) {
        return 0 ;
    } else {
        return val ;
    }
}

function format(val) {
    return "$" + val.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function computePI(price, down, rate, term) {

    if (rate == 0) {
        return (price-down) / term ;
    }

    var i = (rate* .01) / 12 ;
    var monthlyInt = Math.pow((i+1), term);
    var totalPayment = (price-down) * ((i * monthlyInt) / (monthlyInt - 1));
    var result = Math.round(totalPayment*100)/100;
    
    return result 
}

function computePITI(pi, taxes, insurance, hoa, mi) {
    return pi+taxes+insurance+hoa+mi
}

function computePoints(points, loan) {
    return (points * .01) * loan ;
}

function computeCashToClose(down, aprCosts, points, escrowFees, noAPRcosts, contribution) {
    var ctc = down+aprCosts+points+escrowFees+noAPRcosts-contribution ;
    return ctc ; 
}

function computeS1() {
    var loan = tca.scenarioone.price - tca.scenarioone.downPayment ;
    document.getElementById('price1').innerHTML =  format(checkNull(tca.scenarioone.price)) ;
    document.getElementById('loan1').innerHTML = format(checkNull(loan)) ;
    document.getElementById('rate1').innerHTML = checkNull(tca.scenarioone.rate).toFixed(3).toString() + "%" ;
    document.getElementById('term1').innerHTML = checkNull(tca.scenarioone.term );


    var pi = computePI(checkNull(tca.scenarioone.price), checkNull(tca.scenarioone.downPayment), 
            checkNull(tca.scenarioone.rate), checkNull(tca.scenarioone.term)) ;
    var piti = computePITI(pi, tca.mc1.hoa, tca.mc1.hazIns, tca.mc1.taxes, tca.mc1.pmi) ;
    document.getElementById('payment1').innerHTML = format(piti) ;

    points = computePoints(tca.cc1.points, loan) ;
    var ctc = computeCashToClose(tca.scenarioone.downPayment, tca.cc1.aprCosts, points, 
            tca.cc1.escrowFees, tca.cc1.noAPRcosts, tca.cc1.contribution) ;
    document.getElementById('ctc1').innerHTML = format(ctc) ; 

    computeS1MoreInfo(pi, piti, points, ctc)
}

function computeS1MoreInfo(pi, piti, points, ctc) {

    //payment breakdown
    document.getElementById('p1').innerHTML = format(checkNull(tca.scenarioone.price)) ;
    document.getElementById('pi1').innerHTML = format(pi) ;
    document.getElementById('ins1').innerHTML = format(checkNull(tca.mc1.hazIns)) ;
    document.getElementById('tax1').innerHTML = format(checkNull(tca.mc1.taxes)) ;
    document.getElementById('mi1').innerHTML = format(checkNull(tca.mc1.pmi)) ;
    document.getElementById('hoa1').innerHTML = format(checkNull(tca.mc1.hoa)) ;
    document.getElementById('piti1').innerHTML = format(piti) ;

    //closing costs
    document.getElementById('d1').innerHTML = format(checkNull(tca.scenarioone.downPayment)) ;
    document.getElementById('ltv1').innerHTML = checkNull((1-(tca.scenarioone.downPayment/tca.scenarioone.price))*100).toFixed(3).toString() + "%" ;
    document.getElementById('apr1').innerHTML = format(checkNull(tca.cc1.aprCosts)) ;
    document.getElementById('noApr1').innerHTML = format(checkNull(tca.cc1.noAPRcosts)) ;
    document.getElementById('points1').innerHTML = format(checkNull(points)) ;
    document.getElementById('escrow1').innerHTML = format(checkNull(tca.cc1.escrowFees)) ;
    document.getElementById('cont1').innerHTML = format(checkNull(tca.cc1.contribution)) ;
    document.getElementById('total1').innerHTML = format(ctc) ;
    
    document.getElementById('hoa1').innerHTML = format(checkNull(tca.mc1.hoa)) ;

}




function computeS2() {
    var loan = tca.scenariotwo.price - tca.scenariotwo.downPayment ;
    document.getElementById('price2').innerHTML =  format(checkNull(tca.scenariotwo.price)) ;
    document.getElementById('loan2').innerHTML = format(checkNull(loan)) ;
    document.getElementById('rate2').innerHTML = checkNull(tca.scenariotwo.rate).toFixed(3).toString() + "%" ;
    document.getElementById('term2').innerHTML = checkNull(tca.scenariotwo.term) ;


    var pi = computePI(checkNull(tca.scenariotwo.price), checkNull(tca.scenariotwo.downPayment), 
            checkNull(tca.scenariotwo.rate), checkNull(tca.scenariotwo.term)) ;
    var piti = computePITI(pi, tca.mc2.hoa, tca.mc2.hazIns, tca.mc2.taxes, tca.mc2.pmi) ;
    document.getElementById('payment2').innerHTML = format(piti) ;

    var ctc = computeCashToClose(tca.scenariotwo.downPayment, loan, tca.cc2.aprCosts, tca.cc2.points, tca.cc2.escrowFees, 
        tca.cc2.noAPRcosts, tca.cc2.contribution) ;
    document.getElementById('ctc2').innerHTML = format(ctc) ; 

    computeS2MoreInfo(pi, piti)
}

function computeS2MoreInfo(pi, piti) {
    document.getElementById('p2').innerHTML = format(checkNull(tca.scenariotwo.price)) ;
    document.getElementById('pi2').innerHTML = format(pi) ;
    document.getElementById('ins2').innerHTML = format(checkNull(tca.mc2.hazIns)) ;
    document.getElementById('tax2').innerHTML = format(checkNull(tca.mc2.taxes)) ;
    document.getElementById('mi2').innerHTML = format(checkNull(tca.mc2.pmi)) ;
    document.getElementById('hoa2').innerHTML = format(checkNull(tca.mc2.hoa)) ;
    document.getElementById('piti2').innerHTML = format(piti) ;
}


function computeAll() {
    computeS1()
    computeS2()
}

//document.getElementById('payment').innerHTML = computePI()