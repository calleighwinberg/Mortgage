/*const client = document.querySelector('#client');
client.addEventListener('submit', async function(e) {
    //e.preventDefault();
    console.log(tcaID)
    //console.log(client.elements.firstName)
    //axios.put(`/tcas/${tcaID}`, client.elements);
})*/

const allForms = document.getElementsByClassName('form');

//Scenario 1
const p1 = document.querySelector('#p1');
p1.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'product1') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('product1').style.display = 'block';

})

const cc1 = document.querySelector('#cc1');
cc1.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'closingCosts1') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('closingCosts1').style.display = 'block';
    
})

const mc1 = document.querySelector('#mc1');
mc1.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'monthlyCosts1') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('monthlyCosts1').style.display = 'block';

    
})


//Secenario 2
const p2 = document.querySelector('#p2');
p2.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'product2') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('product2').style.display = 'block';
})

const cc2 = document.querySelector('#cc2');
cc2.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'closingCosts2') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('closingCosts2').style.display = 'block';
})

const mc2 = document.querySelector('#mc2');
mc2.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'monthlyCosts2') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('monthlyCosts2').style.display = 'block';
})



//Scenario 3 
const p3 = document.querySelector('#p3');
p3.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'product3') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('product3').style.display = 'block';
})

const cc3 = document.querySelector('#cc3');
cc3.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'closingCosts3') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('closingCosts3').style.display = 'block';
})

const mc3 = document.querySelector('#mc3');
mc3.addEventListener('click', () => {
    for(let form of allForms) {
        if (form.id != 'monthlyCosts3') {
            form.style.display = 'none';
        }
    }
    document.getElementById('client').style.display = 'none';
    document.getElementById('monthlyCosts3').style.display = 'block';
})


