/*const client = document.querySelector('#client');
client.addEventListener('submit', async function(e) {
    //e.preventDefault();
    console.log(tcaID)
    //console.log(client.elements.firstName)
    //axios.put(`/tcas/${tcaID}`, client.elements);
})*/

const allForms = document.getElementsByClassName('form');


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

